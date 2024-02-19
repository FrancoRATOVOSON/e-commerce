import { PriceDetails } from 'utils/types'

import { Shopper as PrismaShopper } from '../client'

export type Shopper = PrismaShopper

export type ShopperInfo = Omit<Shopper, 'password'>

export type ShopperInput = Omit<Shopper, 'id'> & { confPassword?: string }

/* eslint-disable perfectionist/sort-object-types */
export type ShopperData = ShopperInfo & {
  // If there's a cart not validated by the shopper yet
  isOrdering: boolean
  // Number of validated oder but not delivered yet
  waitingOrders: number
  // Number of delivered order
  validatedOrders: number

  amountPerOrder: PriceDetails | number
  totalAmount: PriceDetails | number

  // Total number of different product purchased (per distinct product)
  productTotalPurchased: number
  // Total number of item ordered (without distinction per product)
  itemsTotalPruchased: number

  lastCommandDate: Date
}
