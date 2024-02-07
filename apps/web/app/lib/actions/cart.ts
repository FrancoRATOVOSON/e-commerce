'use server'

import {
  addItemToCart,
  getUserCartProducts,
  removeItemToCart as removeItem,
  updateCartState,
  updateProductQty
} from 'database'
import { AuthorizationError, ExpiredActionError, UserInputError } from 'utils'
import {
  ErrorActionState,
  ProductCardInfos,
  ServerActionReturnType
} from 'utils/types'

import {
  getUserSessionCartId,
  getUserSessionId,
  removeCartCookie,
  setCartCookie
} from '../cookies'
import { SERVER_ERROR, getSuccessResponse } from './results'

const USER_NOT_CONNECTED_ERROR: ErrorActionState = {
  code: 4,
  message: 'Vous devez être connecté pour effectuer cette opération.',
  state: 'error'
}
const ORDER_NOT_FOUND_ERROR: ErrorActionState = {
  code: 4,
  message:
    'Votre panier est introuvable ou a été effacé, veuillez changer de numéro de commande',
  state: 'error'
}
const UNAUTHORIZED_ACTION_ERROR: ErrorActionState = {
  code: 4,
  message: `Attention ⚠️! Vous tentez d'accéder à une ressource qui n'est pas à vous.`,
  state: 'error'
}
const EXPIRED_ACTION_ERROR: ErrorActionState = {
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
    if (error instanceof UserInputError) return ORDER_NOT_FOUND_ERROR
    if (error instanceof AuthorizationError) return UNAUTHORIZED_ACTION_ERROR
    if (error instanceof ExpiredActionError) return EXPIRED_ACTION_ERROR
    return SERVER_ERROR
  }
}

export const getUserCart = async (): Promise<
  ServerActionReturnType<ProductCardInfos[]>
> => {
  try {
    const userId = getUserSessionId()
    if (!userId) return USER_NOT_CONNECTED_ERROR

    const { cart, products } = await getUserCartProducts(userId)

    if (cart) setCartCookie(cart)

    return getSuccessResponse(products)
  } catch (error) {
    return SERVER_ERROR
  }
}

export const removeItemFromCart = async (
  productId: string
): Promise<ServerActionReturnType> => {
  try {
    const userId = getUserSessionId()
    if (!userId) return USER_NOT_CONNECTED_ERROR

    const cartId = getUserSessionCartId()
    await removeItem(productId, cartId)

    return getSuccessResponse()
  } catch (error) {
    if (error instanceof AuthorizationError) return UNAUTHORIZED_ACTION_ERROR
    return SERVER_ERROR
  }
}

export const setProductQty = async (
  productId: string,
  newQty: number
): Promise<ServerActionReturnType<number>> => {
  try {
    const userId = getUserSessionId()
    if (!userId) return USER_NOT_CONNECTED_ERROR

    const cartId = getUserSessionCartId()
    if (!cartId) return UNAUTHORIZED_ACTION_ERROR

    const { quantity } = await updateProductQty(productId, cartId, newQty)
    return getSuccessResponse(quantity)
  } catch (error) {
    return SERVER_ERROR
  }
}

export const validateCart = async (): Promise<ServerActionReturnType> => {
  try {
    const userId = getUserSessionId()
    if (!userId) return USER_NOT_CONNECTED_ERROR

    const cartId = getUserSessionCartId()
    if (!cartId) return UNAUTHORIZED_ACTION_ERROR

    await updateCartState(cartId)
    removeCartCookie()
    return getSuccessResponse()
  } catch (error) {
    if (error instanceof UserInputError) return ORDER_NOT_FOUND_ERROR
    return SERVER_ERROR
  }
}
