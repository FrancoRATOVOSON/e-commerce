import { useParams } from '@/router'
import { fakeOrderDetails } from 'database/faker'
import { OrderDetails } from 'database/types'

import { useShopperDetailsContext } from '../_contexts'
import { OrderOverview, detailToOverview } from '../_lib'

function useCurrentOrderId(): null | number {
  const orderId = Number.parseInt(useParams('/customer/:id/:order').order, 10)

  if (Number.isNaN(orderId)) return null

  return orderId
}

function useOrderDetailsGet(id: number): {
  order: OrderDetails
  overview: OrderOverview
} | null {
  const { details } = useShopperDetailsContext()
  const shopperId = Number.parseInt(useParams('/customer/:id/:order').id, 10)

  let order = details.orders.find(detail => detail.id === id)

  if (order === undefined) order = fakeOrderDetails(shopperId, false)

  return { order, overview: detailToOverview(order) }
}

export { useCurrentOrderId, useOrderDetailsGet }
