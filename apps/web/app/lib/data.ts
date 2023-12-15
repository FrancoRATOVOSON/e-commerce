import { ProductCardInfos } from 'utils'
import {
  getProductPageInfosFrom, getTagsList, getProductList as productList
} from 'utils/faker'

export const getProductList = async(n:number=10) => productList(n)

export const getProductDetails = async(product:ProductCardInfos) => getProductPageInfosFrom(product)

export const getCategories = async() => getTagsList(6)

export const getTags = async() => getTagsList(10)