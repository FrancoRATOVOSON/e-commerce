'use server'

import { addItemToCart, getUserCartProducts } from 'database'
import { AuthorizationError, ExpiredActionError, UserInputError } from 'utils'
import {
  ErrorActionState,
  ProductCardInfos,
  ServerActionReturnType
} from 'utils/types'

import {
  getUserSessionCartId,
  getUserSessionId,
  setCartCookie
} from '../cookies'
import { SERVER_ERROR, getSuccessResponse } from './results'

const USER_NOT_CONNECTED_ERROR: ErrorActionState = {
  code: 4,
  message: 'Vous devez être connecté pour effectuer cette opération.',
  state: 'error'
}
const ORDER_NOT_FOUND_ERRO: ErrorActionState = {
  code: 4,
  message:
    'Votre panier est introuvable ou a été effacé, veuillez changer de numéro de commande',
  state: 'error'
}
const UNAUTHORIZED_ACTION_ERRO: ErrorActionState = {
  code: 4,
  message: `Attention ⚠️! Vous tentez d'accéder à une ressource qui n'est pas à vous.`,
  state: 'error'
}
const EXPIRED_ACTION_ERRO: ErrorActionState = {
  code: 4,
  message: `Votre commande a déjà été validé ou livré, veuillez ajouter à un autre panier.`,
  state: 'error'
}

export const addToCart = async (
  productId: string
): Promise<ServerActionReturnType> => {
  try {
    const shopperId = getUserSessionId()
    if (!shopperId) return USER_NOT_CONNECTED_ERROR

    const cartId = getUserSessionCartId()
    const { id } = await addItemToCart(productId, shopperId, cartId)

    setCartCookie(id)

    return getSuccessResponse()
  } catch (error) {
    if (error instanceof UserInputError) return ORDER_NOT_FOUND_ERRO
    if (error instanceof AuthorizationError) return UNAUTHORIZED_ACTION_ERRO
    if (error instanceof ExpiredActionError) return EXPIRED_ACTION_ERRO
    return SERVER_ERROR
  }
}

export const getUserCart = async (): Promise<
  ServerActionReturnType<ProductCardInfos[]>
> => {
  try {
    const userId = getUserSessionId()
    if (!userId) return USER_NOT_CONNECTED_ERROR

    const products = await getUserCartProducts(userId)
    return getSuccessResponse(products)
  } catch (error) {
    return SERVER_ERROR
  }
}
