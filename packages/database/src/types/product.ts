import {
  ImageDetails,
  OmitStrict,
  PriceDetails,
  WithPartial
} from 'utils/types'

import {
  OrderProduct,
  Product as PrismaProduct,
  Tag as PrismaTag
} from '../client'

export type ProductType = WithPartial<
  PrismaProduct,
  'categorySlug' | 'description' | 'discount'
> & {
  category?: {
    name: string
  }
  tags?: Array<{ tag: { label: string } }>
}

type FormatedProductType = Pick<
  PrismaProduct,
  'description' | 'discount' | 'id' | 'name'
> &
  Pick<OrderProduct, 'quantity'> & {
    category: string
    image: ImageDetails
    price: PriceDetails
    tags: string[]
  }

type ProductDetailsType = Pick<
  FormatedProductType,
  'category' | 'description' | 'discount' | 'tags'
>

export type ProductData = Pick<
  FormatedProductType,
  'id' | 'image' | 'name' | 'price'
>

type ProdcutOrderType = Pick<FormatedProductType, 'quantity'>

export type Product = ProductData & Partial<ProductDetailsType>

export type ProductCartData = ProductData & Partial<ProdcutOrderType>

export type ProductDetails = ProductData &
  WithPartial<ProductDetailsType, 'discount'>

export type ProductListType = Array<ProductData>

export type ProductParams = {
  category: string | string[]
  discount?: {
    max?: number
    min?: number
  }
  price?: {
    max?: number
    min?: number
  }
  tag?: string | string[]
}

export type TagType = OmitStrict<PrismaTag, 'categorySlug'>

export type ProductOrder = OmitStrict<ProductData, 'image'> &
  OmitStrict<ProductDetailsType, 'description'> &
  ProdcutOrderType
