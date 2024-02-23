import { ShopperData } from 'database/types'

type ShopperCache = {
  shopperDatas: ShopperData[]
}

let shopperCache: ShopperCache = {
  shopperDatas: []
}

function setShopperCache(list: ShopperData[]) {
  shopperCache = { ...shopperCache, shopperDatas: [...list] }
}

function getFromShopperCache(id: number): Readonly<ShopperData> | null {
  const result = shopperCache.shopperDatas.find(shopper => shopper.id === id)

  if (result) return Object.freeze(result)
  return null
}

export { getFromShopperCache, setShopperCache }
