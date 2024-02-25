import { OrderDetails } from 'database/types'
import { OmitStrict, PriceDetails } from 'utils/types'

export type SectionType = {
  amount: number
  quantity: number
}

export type FormatedShopperDetails = {
  categories: Map<string, SectionType & { tags: Map<string, SectionType> }>
}

export type OrderOverview = OmitStrict<
  OrderDetails,
  'products' | 'shopperId'
> & {
  amount: PriceDetails
  itemCount: number
  productCount: number
}
