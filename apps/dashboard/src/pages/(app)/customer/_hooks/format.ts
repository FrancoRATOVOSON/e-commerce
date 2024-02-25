import {
  OrderOverview,
  detailsToFormatedDetails,
  detailsToOrderOverview
} from '../_lib'
import { useCurrentShopperDetails } from './shopperDetails'

function useFormatShopperOrders(): Array<OrderOverview> {
  const { details } = useCurrentShopperDetails()
  return detailsToOrderOverview(details.orders)
}

function useFormatShopperDetails() {
  const { details } = useCurrentShopperDetails()
  return detailsToFormatedDetails(details.orders)
}

export { useFormatShopperDetails, useFormatShopperOrders }
