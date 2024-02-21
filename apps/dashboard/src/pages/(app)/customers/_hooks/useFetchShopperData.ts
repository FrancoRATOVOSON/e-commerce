import { getShopperDataList } from 'database/faker'
import { ShopperData } from 'database/types'

function useFetchShopperData(): Array<ShopperData> {
  return getShopperDataList()
}

export default useFetchShopperData
