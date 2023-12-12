import { faker } from '@faker-js/faker'
import { ProductCardInfos, ProductPageInfos } from './types'

function getAnArrayOf<T>(pattern: () => T, length: number): T[] {
  const list:Array<T> = []
  for (let index = 0; index < length; index+=1)
    list.push(pattern())
  return list
}

export function getProductCardInfos():ProductCardInfos {
  const productTitle = faker.commerce.product()
  const productImage = faker.image.urlLoremFlickr({
    category: productTitle,
    height: 250,
    width: 300
  })

  return {
    productId: faker.string.uuid(),
    name: productTitle,
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

export function getProductPageInfos():ProductPageInfos {
  return {
    ...getProductCardInfos(),
    description: faker.lorem.sentences({min:2, max: 4})
  }
}

export function getProductPageInfosFrom(product:ProductCardInfos):ProductPageInfos {
  return {
    ...product,
    description: faker.lorem.sentences({min:2, max: 4})
  }
}

export const getProductList = (n:number=10) => getAnArrayOf(getProductCardInfos,n)

export const getTagsList = (n:number=5) => getAnArrayOf(faker.commerce.product, n)