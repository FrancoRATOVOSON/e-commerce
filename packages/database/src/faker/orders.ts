import { getAnArrayOf, getRandomElementOf } from 'utils'
import { faker } from 'utils/faker'
import { OrderStatusType } from 'utils/types'

import { fakeProductOrder } from '.'
import { OrderDetails } from '../types'

export const ORDER_STATUS_TYPE: OrderStatusType[] = [
  OrderStatusType.VALIDATED,
  OrderStatusType.DONE
]

export function fakeOrderDetails(
  shopperId: number,
  isCart: boolean = false
): OrderDetails {
  const status = isCart
    ? OrderStatusType.CART
    : getRandomElementOf(ORDER_STATUS_TYPE)
  let validatedAt: Date | null = null
  let deliveredAt: Date | null = null

  switch (status) {
    case OrderStatusType.VALIDATED:
      validatedAt = faker.date.past({ refDate: new Date() })
      break
    case OrderStatusType.DONE:
      deliveredAt = faker.date.past({ refDate: new Date() })
      validatedAt = faker.date.past({ refDate: deliveredAt })
      break
    default:
      break
  }

  return {
    deliveredAt,
    id: faker.number.int(),
    products: getAnArrayOf(
      fakeProductOrder,
      faker.number.int({ max: 10, min: 1 })
    ),
    shopperId,
    status,
    validatedAt
  }
}
