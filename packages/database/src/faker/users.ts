import { generateRandom, getAnArrayOf } from 'utils'
import { faker } from 'utils/faker'

import { ShopperData, ShopperDetails, ShopperInfo } from '../types'
import { fakeOrderDetails } from './orders'

export function fakeShopperInfo(): ShopperInfo {
  return {
    id: faker.number.int(),
    login: faker.internet.email()
  }
}

export function fakeShopperData(): ShopperData {
  const { id, login } = fakeShopperInfo()
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
  const lastOrderDate = faker.date.past()

  return {
    amountPerOrder,
    id,
    isOrdering,
    itemsTotalPruchased,
    lastOrderDate,
    login,
    productTotalPurchased,
    totalAmount,
    validatedOrders,
    waitingOrders
  }
}

export function fakeShopperDataList(amount: number = 100): ShopperData[] {
  return getAnArrayOf(fakeShopperData, amount)
}

export function fakeShopperDetails(shopperId: number): ShopperDetails {
  const amount = faker.number.int({ max: 450, min: 0 })
  const isOrdering = generateRandom(0, 10) % 3 === 0
  const orderList = getAnArrayOf(() => fakeOrderDetails, amount)
  const cartIndex = generateRandom(0, amount)

  return {
    orders: orderList.map((order, index) =>
      order(shopperId, isOrdering && index === cartIndex)
    )
  }
}
