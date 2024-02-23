import { ShopperDetails } from 'database/types'

import { detailsToFormatedDetails } from '../_lib'

function useFormatShopperDetails(details: ShopperDetails) {
  return detailsToFormatedDetails(details.orders)
}

export default useFormatShopperDetails
