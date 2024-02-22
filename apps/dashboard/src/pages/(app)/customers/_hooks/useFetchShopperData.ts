import { fakeShopperDataList } from 'database/faker'
import { ShopperData } from 'database/types'

function useFetchShopperData(): Array<ShopperData> {
  return fakeShopperDataList()
}

export default useFetchShopperData
