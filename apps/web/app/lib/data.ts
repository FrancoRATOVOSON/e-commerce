'use server'

import {
  getTags as getCategoryTags,
  getCategories as getCats,
  getProduct,
  getProductList as getProducts
} from 'database'
import { ProductParams } from 'database/types'

export const getProductList = async (params?: ProductParams) => {
  const products = await getProducts(params)
  let result = [...products]

  const resultFilter = (param: { max?: number; min?: number }) => {
    const { max, min } = param
    return result.filter(({ price: { value } }) => {
      const meetsMinPrice = min ? value >= min : true
      const meetsMaxPrics = max ? value <= max : true

      return meetsMinPrice && meetsMaxPrics
    })
  }

  if (params?.price && (params.price.min || params.price.max))
    result = [...resultFilter(params.price)]

  if (params?.discount && (params.discount.min || params.discount.max))
    result = [...resultFilter(params.discount)]

  return result
}

export const getProductDetails = (id: string) => getProduct(id)

export const getCategories = () => getCats()

export const getTags = (category?: string | string[]) =>
  getCategoryTags(category)
