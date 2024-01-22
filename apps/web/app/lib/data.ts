'use server'

import {
  getProductList as getProducts,
  getProductDetails as getDetails,
  getCategories as getCats,
  getTags as getCategoryTags
} from 'database'
import { GetProductListParams, ProductCardInfos } from 'utils/types'



export const getProductList = (params?:GetProductListParams) => getProducts(params)

export const getProductDetails = (product:ProductCardInfos) => getDetails(product)

export const getCategories = () => getCats()

export const getTags = (category?:string|string[]) => getCategoryTags(category)