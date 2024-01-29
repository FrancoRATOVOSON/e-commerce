'use server'

import {
  getTags as getCategoryTags,
  getCategories as getCats,
  getProductDetails as getDetails,
  getProductList as getProducts
} from 'database'
import { GetProductListParams, ProductCardInfos } from 'utils/types'

export const getProductList = (params?: GetProductListParams) =>
  getProducts(params)

export const getProductDetails = (product: ProductCardInfos) =>
  getDetails(product)

export const getCategories = () => getCats()

export const getTags = (category?: string | string[]) =>
  getCategoryTags(category)
