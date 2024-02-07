'use server'

import {
  getTags as getCategoryTags,
  getCategories as getCats,
  getProductDetails as getDetails,
  getProductList as getProducts
} from 'database'
import { GetProductListParams, ProductCardInfos } from 'utils/types'

export const getProductList = async (params?: GetProductListParams) => {
  const products = await getProducts(params)
  let result: ProductCardInfos[] = [...products]

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

export const getProductDetails = (product: ProductCardInfos) =>
  getDetails(product)

export const getCategories = () => getCats()

export const getTags = (category?: string | string[]) =>
  getCategoryTags(category)
