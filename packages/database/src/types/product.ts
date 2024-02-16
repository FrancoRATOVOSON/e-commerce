import { WithPartial, WithRequired } from 'utils/types'

import { Product as PrismaProduct, Tag as PrismaTag } from '../client'

export type ImageDetails = {
  alt: string
  src: string
}

export type PriceDetails = {
  currency: string
  value: number
}

export type ProductType = WithPartial<
  PrismaProduct,
  'categorySlug' | 'description' | 'discount'
> & {
  category?: {
    name: string
  }
  tags?: Array<{ tag: { label: string } }>
}

type FormatedProduct = {
  category: string
  image: ImageDetails
  price: PriceDetails
  quantity?: number
  tags: string[]
} & Omit<
  ProductType,
  'category' | 'categorySlug' | 'currency' | 'image' | 'price' | 'tags'
>

export type Product = WithRequired<
  Partial<FormatedProduct>,
  'id' | 'image' | 'name' | 'price'
>

export type ProductData = Pick<
  FormatedProduct,
  'id' | 'image' | 'name' | 'price'
>

export type ProductCartData = Pick<
  FormatedProduct,
  'id' | 'image' | 'name' | 'price' | 'quantity'
>

export type ProductDetails = WithPartial<FormatedProduct, 'discount'>

export type ProductListType = Array<ProductData>

export type ProductInput = WithPartial<
  Omit<FormatedProduct, 'id'>,
  'discount' | 'tags'
>

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

export type TagType = Omit<PrismaTag, 'categorySlug'>
