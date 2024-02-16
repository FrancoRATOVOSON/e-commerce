import {
  Order as PrismaOrder,
  OrderProduct as PrismaOrderProduct
} from '../client'

export * from './product'
export * from './user'

export type OrderProduct = Omit<PrismaOrderProduct, 'orderId'>

export type Order = PrismaOrder & {
  products: Array<OrderProduct>
}
