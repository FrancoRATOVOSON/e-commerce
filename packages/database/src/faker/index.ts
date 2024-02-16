import { faker } from '@faker-js/faker'
import { getAnArrayOf } from 'utils'

export * from './products'

export const getTagsList = (n: number = 5) =>
  getAnArrayOf(faker.commerce.product, n)

export const getRandomPrice = () =>
  faker.number.int({ max: 1_000, min: 1 }) * 1_000
