// 'use server'

import {
  getProductList as getProducts,
  getProductDetails as getDetails,
  getCategories as getCats,
  getTags as getCategoryTags
} from 'database'
import { Category, ProductCardInfos } from 'utils/types'

export const getProductList = () => getProducts()

export const getProductDetails = (product:ProductCardInfos) => getDetails(product)

export const getCategories = () => getCats()

export const getTags = (category:Category) => getCategoryTags(category)