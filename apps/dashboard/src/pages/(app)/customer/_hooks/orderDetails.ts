import { OrderDetails } from 'database/types'

import { useShopperDetailsContext } from '../_contexts'
import { OrderOverview, detailToOverview } from '../_lib'

function useOrderDetailsGet(
  id: number
): { order: OrderDetails; overview: OrderOverview } | null {
  const { details } = useShopperDetailsContext()

  const order = details.orders.find(detail => detail.id === id)

  if (!order) return null

  return { order, overview: detailToOverview(order) }
}

export default useOrderDetailsGet
