import { getAnArrayOf } from 'utils'
import { faker } from 'utils/faker'

import { ShopperData, ShopperInfo } from '../types'

export function getShopperInfo(): ShopperInfo {
  return {
    id: faker.number.int(),
    login: faker.internet.email()
  }
}

export function getShopperData(): ShopperData {
  const { id, login } = getShopperInfo()
  const isOrdering = faker.datatype.boolean(0.35)
  const validatedOrders = faker.number.int(300)
  const waitingOrders = faker.number.int(300)
  const productTotalPurchased = faker.number.int({
    max: 1200,
    min: validatedOrders + waitingOrders
  })
  const itemsTotalPruchased = faker.number.int({
    max: productTotalPurchased * 2,
    min: productTotalPurchased
  })
  const amountPerOrder = faker.number.int({ max: 50_000, min: 10 }) * 1_000
  const totalAmount =
    amountPerOrder *
    (validatedOrders + waitingOrders) *
    faker.number.float({ max: 3, min: 0.1 })
  const lastCommandDate = faker.date.past()

  return {
    amountPerOrder,
    id,
    isOrdering,
    itemsTotalPruchased,
    lastCommandDate,
    login,
    productTotalPurchased,
    totalAmount,
    validatedOrders,
    waitingOrders
  }
}

export function getShopperDataList(amount: number = 100): ShopperData[] {
  return getAnArrayOf(getShopperData, amount)
}
