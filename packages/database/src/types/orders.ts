import { OrderStatusType } from 'utils/types'

import { ProductOrder } from '.'
import { Order as PrismaOrder } from '../client'

export type Order = PrismaOrder & {
  status: OrderStatusType
}

export type OrderDetails = Order & {
  products: Array<ProductOrder>
}
