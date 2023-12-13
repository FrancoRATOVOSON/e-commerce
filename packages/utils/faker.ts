import { faker } from '@faker-js/faker'
import { ProductCardInfos, ProductPageInfos } from './types'

type NonEmptyArrayOf<T> = [T, ...T[]]
type FunctionOf<T> = () => T

function getRandomElementOf<T>(array: Array<T>):T {
  return  array[Math.floor(Math.random() * array.length)]
}

function getAnArrayOf<T>(
  pattern: NonEmptyArrayOf<FunctionOf<T>> | FunctionOf<T>, length: number
): T[] {
  const list:Array<T> = []
  for (let index = 0; index < length; index+=1)
    list.push(Array.isArray(pattern) ? getRandomElementOf(pattern)() : pattern())
  return list
}

function generateRandom(min=0, max=10) {
  const diff = max - min
  const rand = Math.random()

  return Math.floor(rand * diff) + min
}

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