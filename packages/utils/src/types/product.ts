export interface ImageDetails {
  alt: string
  src: string
}

export interface PriceDetails {
  currency: string
  value: number
}

export type ProductCardInfos = {
  image: ImageDetails | string
  name: string
  price: PriceDetails
  productId: string
  quantity?: null | number
}

export interface ProductPageInfos extends ProductCardInfos {
  category: string
  description: string
  tags?: Array<string>
}

export interface GetProductListParams {
  category: string | string[]
  tag?: string | string[]
}
