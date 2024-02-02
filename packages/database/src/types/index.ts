import {
  Order as PrismaOrder,
  OrderProduct as PrismaOrderProduct,
  Product as PrismaProduct,
  Shopper as PrismaShopper
} from '../client'

export type ImageDetails = {
  alt: string
  src: string
}

export type PriceDetails = {
  currency: string
  value: number
}

export type Product = {
  image: ImageDetails
  price: PriceDetails
} & Omit<PrismaProduct, 'currency' | 'image' | 'price'>

export type Shopper = Omit<PrismaShopper, 'password'>

export type OrderProduct = Omit<PrismaOrderProduct, 'orderId'>

export type Order = PrismaOrder & {
  products: Array<OrderProduct>
}
