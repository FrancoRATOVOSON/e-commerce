import { faker } from '@faker-js/faker'
import { ProductCardInfos, ProductPageInfos } from '../types'
import { generateRandom, getAnArrayOf } from '..'

export * from './datas'

export function getProductCardInfos():ProductCardInfos {
  const productName = faker.commerce.productName()
  const productImage = faker.image.urlLoremFlickr({
    height: 250,
    width: 300
  })

  return {
    productId: faker.string.uuid(),
    name: productName,
    price: {
      value: faker.number.int({
        min: 1,
        max: 1_000
      }) * 1_000,
      currency: 'MGA'
    },
    image: productImage
  }
}

export function getProductPageInfosFrom(product:ProductCardInfos):ProductPageInfos {
  return {
    ...product,
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    tags: getAnArrayOf([
      faker.commerce.product, faker.commerce.productAdjective, faker.commerce.productMaterial
    ],generateRandom(0,5))
  }
}

export const getProductList = (n:number=10) => getAnArrayOf(getProductCardInfos,n)

export const getTagsList = (n:number=5) => getAnArrayOf(faker.commerce.product, n)

export const getProductPageInfos = () => getProductPageInfosFrom(getProductCardInfos())

export const getRandomPrice = () => (faker.number.int({min: 1, max: 1_000}) * 1_000)
