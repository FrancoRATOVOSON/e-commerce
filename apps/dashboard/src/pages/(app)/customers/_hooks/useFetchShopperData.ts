import { setShopperCache } from '@/lib'
import { fakeShopperDataList } from 'database/faker'
import { ShopperData } from 'database/types'

function useFetchShopperData(): Array<ShopperData> {
  const shoppers = fakeShopperDataList()

  setShopperCache(shoppers)

  return shoppers
}

export default useFetchShopperData
