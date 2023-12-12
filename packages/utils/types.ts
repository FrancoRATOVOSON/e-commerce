export interface ImageDetails {
  src: string
  alt: string
}

export interface PriceDetails {
  value: number
  currency: string
}

export interface ProductCardInfos {
  productId: string
  name: string
  price: PriceDetails
  image: string | ImageDetails
}

export interface ProductPageInfos extends ProductCardInfos {
  description: string
  category: string
  tags?: Array<string>
}
