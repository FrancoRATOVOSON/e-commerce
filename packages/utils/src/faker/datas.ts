import { faker } from '@faker-js/faker'

import { getAnArrayOf } from '..'
import { PriceDetails } from '../types'

type FakePriceParams = {
  max?: number
  min?: number
}

export function fakePrice(param?: FakePriceParams): PriceDetails {
  const { max, min } = { max: param?.max || 1_000, min: param?.min || 1 }
  return {
    currency: 'MGA',
    value: faker.number.int({ max, min }) * 1_000
  }
}

function getSale() {
  return {
    description: `${faker.number.int({ max: 10_000, min: 500 })} unité vendues`,
    title: faker.commerce.productName(),
    value: fakePrice({ max: 50_000, min: 700 })
  }
}

function getBuy() {
  return {
    description: `${faker.number.int({ max: 100, min: 5 })} commandes`,
    title: faker.internet.email(),
    value: fakePrice({ max: 10_000, min: 500 })
  }
}

export function getSaleList(total: number = 5) {
  return getAnArrayOf(getSale, total)
}

export function getBuyList(total: number = 5) {
  return getAnArrayOf(getBuy, total)
}
