import { faker } from '@faker-js/faker'

import { generateRandom, getAnArrayOf } from '..'
import { ProductCardInfos, ProductPageInfos } from '../types'

export * from './datas'

export { generateRandom }

export function getProductCardInfos(): ProductCardInfos {
  const productName = faker.commerce.productName()
  const productImage = faker.image.urlLoremFlickr({
    height: 250,
    width: 300
  })

  return {
    image: productImage,
    name: productName,
    price: {
      currency: 'MGA',
      value:
        faker.number.int({
          max: 1_000,
          min: 1
        }) * 1_000
    },
    productId: faker.string.uuid()
  }
}

export function getProductPageInfosFrom(
  product: ProductCardInfos
): ProductPageInfos {
  return {
    ...product,
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    tags: getAnArrayOf(
      [
        faker.commerce.product,
        faker.commerce.productAdjective,
        faker.commerce.productMaterial
      ],
      generateRandom(0, 5)
    )
  }
}

export const getProductList = (n: number = 10) =>
  getAnArrayOf(getProductCardInfos, n)

export const getTagsList = (n: number = 5) =>
  getAnArrayOf(faker.commerce.product, n)

export const getProductPageInfos = () =>
  getProductPageInfosFrom(getProductCardInfos())

export const getRandomPrice = () =>
  faker.number.int({ max: 1_000, min: 1 }) * 1_000
