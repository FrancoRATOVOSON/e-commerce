import { OrderStatusType } from 'utils/types'

import {
  Order as PrismaOrder,
  OrderProduct as PrismaOrderProduct
} from '../client'

export * from './product'
export * from './user'
export * from './orders'

export type OrderProduct = Omit<PrismaOrderProduct, 'orderId'>

export type Order = PrismaOrder & {
  products: Array<OrderProduct>
  status: OrderStatusType
}
