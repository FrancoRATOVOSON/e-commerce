import { AuthorizationError, ExpiredActionError, UserInputError } from 'utils'
import { OrderStatusType } from 'utils/types'

import { productToProductCardInfo } from '.'
import prisma from '../client'

function getOrder(id: number) {
  return prisma.order.findUnique({ where: { id } })
}

export async function addItemToCart(
  productId: string,
  shopperId: number,
  cartId?: null | number | undefined
) {
  if (!cartId)
    return prisma.order.create({
      data: {
        products: { create: { productId } },
        shopperId,
        status: OrderStatusType.CART
      }
    })

  const order = await getOrder(cartId)
  if (!order) throw new UserInputError('Order not found')

  if (order.shopperId !== shopperId)
    throw new AuthorizationError(`Your accessing a data that is not yours`)

  if (order.status !== OrderStatusType.CART)
    throw new ExpiredActionError('This order cannot be updated anymore')

  return prisma.order.update({
    data: { products: { create: { productId } } },
    where: { id: order.id }
  })
}

export function removeItemToCart() {}

export async function getUserCartProducts(shopperId: number) {
  const userOrders = await prisma.order.findMany({
    select: {
      products: {
        select: {
          product: true
        }
      }
    },
    where: { shopperId, status: OrderStatusType.CART }
  })

  if (userOrders.length === 0) return []

  return userOrders[0].products.map(({ product }) =>
    productToProductCardInfo(product)
  )
}
