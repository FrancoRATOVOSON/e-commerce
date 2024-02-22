import { OmitStrict, OrderStatusType } from 'utils/types'

import { ProductOrder } from '.'
import { Order as PrismaOrder } from '../client'

export type Order = OmitStrict<PrismaOrder, 'status'> & {
  status: OrderStatusType
}

export type OrderDetails = Order & {
  products: Array<ProductOrder>
}
