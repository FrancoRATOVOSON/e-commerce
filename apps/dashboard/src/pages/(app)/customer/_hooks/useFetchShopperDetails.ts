import { fakeShopperDetails } from 'database/faker'
import { ShopperDetails } from 'database/types'

function useFetchShopperDetails(id: number): ShopperDetails {
  return fakeShopperDetails(id)
}

export default useFetchShopperDetails
