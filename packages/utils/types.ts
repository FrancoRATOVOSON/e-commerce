export interface ProductCardInfos {
  productId: string
  name: string
  price: {
    value: number
    currency: string
  }
  image: string | {
    src: string
    alt: string
  }
}