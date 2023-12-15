import { ProductCardInfos } from 'utils'
import {
  getProductPageInfosFrom, getTagsList, getProductList as productList
} from 'utils/faker'

export const getProductList = async(n:number=10) => {
  await new Promise(resolve => { setTimeout(resolve,5000) })
  return productList(n)
}

export const getProductDetails = async(product:ProductCardInfos) => getProductPageInfosFrom(product)

export const getCategories = async() => getTagsList(6)

export const getTags = async() => getTagsList(10)