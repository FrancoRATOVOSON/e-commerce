import { AuthorizationError, ExpiredActionError, UserInputError } from 'utils'
import { OrderStatusType } from 'utils/types'

import { productToProductCardInfo } from '.'
import prisma from '../client'

function getOrder(id: number) {
  return prisma.order.findUnique({ where: { id } })
}

export async function getProductQty(
  productId: string,
  orderId: number
): Promise<null | number> {
  const productsInOrder = await prisma.order.findUnique({
    select: {
      products: {
        select: { product: { select: { id: true } }, quantity: true }
      }
    },
    where: { id: orderId }
  })

  if (!productsInOrder) return null

  const product = productsInOrder.products.find(
    ({ product: { id } }) => id === productId
  )

  if (!product) return null

  return product.quantity
}

function createOrder(productId: string, shopperId: number) {
  return prisma.order.create({
    data: {
      products: { create: { productId } },
      shopperId,
      status: OrderStatusType.CART
    }
  })
}

function addProductToOrder(productId: string, orderId: number) {
  return prisma.orderProduct.upsert({
    create: { orderId, productId },
    update: { quantity: { increment: 1 } },
    where: { productId_orderId: { orderId, productId } }
  })
}

export async function updateProductQty(
  productId: string,
  orderId: number,
  quantity: number
) {
  const { orderId: id, quantity: qty } = await prisma.orderProduct.update({
    data: { quantity },
    where: { productId_orderId: { orderId, productId } }
  })
  return { id, quantity: qty }
}

export async function addItemToCart(
  productId: string,
  shopperId: number,
  cartId?: null | number | undefined
): Promise<{ id: number }> {
  if (!cartId) return createOrder(productId, shopperId)

  const order = await getOrder(cartId)
  if (!order) throw new UserInputError('Order not found')

  if (order.shopperId !== shopperId)
    throw new AuthorizationError(`Your accessing a data that is not yours`)

  if (order.status !== OrderStatusType.CART)
    throw new ExpiredActionError('This order cannot be updated anymore')

  return { id: (await addProductToOrder(productId, cartId)).orderId }
}

export function removeItemToCart(productId: string, orderId?: number) {
  if (!orderId)
    throw new AuthorizationError(`Your accessing a data that is not yours`)

  return prisma.orderProduct.delete({
    where: { productId_orderId: { orderId, productId } }
  })
}

export async function getUserCartProducts(shopperId: number) {
  const userOrders = await prisma.order.findMany({
    select: {
      products: {
        select: {
          product: true,
          quantity: true
        }
      }
    },
    where: { shopperId, status: OrderStatusType.CART }
  })

  if (userOrders.length === 0) return []

  return userOrders[0].products.map(({ product, quantity }) => ({
    quantity,
    ...productToProductCardInfo(product)
  }))
}
