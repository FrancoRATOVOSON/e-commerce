export type NonEmptyArrayOf<T> = [T, ...T[]]
export type FunctionOf<T> = () => T

export interface TagType {
  id: string,
  value: string
}

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

export interface Category {
  slug: string
  name: string
}

export interface Tag {
  slug: string
  label: string
}
