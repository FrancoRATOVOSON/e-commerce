import { NonEmptyArrayOf } from 'utils/types'

import prisma from '../client'
import {
  Product,
  ProductData,
  ProductDetails,
  ProductListType,
  ProductParams,
  ProductType
} from '../types'

const ProductSelect /*: Prisma.ProductSelect */ = {
  category: {
    select: {
      name: true
    }
  },
  categorySlug: true,
  currency: true,
  description: true,
  discount: true,
  id: true,
  image: true,
  name: true,
  price: true,
  tags: { select: { tag: { select: { label: true } } } }
}

export function productToData(product: ProductType): Product {
  const { category, currency, image, name, price, tags, ...data } = product
  return {
    category: category?.name,
    image: { alt: name, src: image },
    name,
    price: { currency, value: price.toNumber() },
    tags: tags?.map(tag => tag.tag.label),
    ...data
  }
}

function productListToDataList(products: ProductType[]): ProductData[] {
  return products.map(product => productToData(product))
}

async function getProductListFromCategory(
  category: NonEmptyArrayOf<string>
): Promise<ProductListType> {
  const products = await prisma.product.findMany({
    select: ProductSelect,
    where: { category: { slug: { in: category } } }
  })

  return productListToDataList(products)
}

async function getProductListFromTags(
  category: NonEmptyArrayOf<string>,
  tags: NonEmptyArrayOf<string>
): Promise<ProductListType> {
  const products = await prisma.product.findMany({
    select: ProductSelect,
    where: {
      category: { slug: { in: category } },
      tags: { some: { tagSlug: { in: tags } } }
    }
  })

  return productListToDataList(products)
}

async function getAllProducts(): Promise<ProductListType> {
  const products = await prisma.product.findMany({
    select: ProductSelect
  })

  return productListToDataList(products)
}

export function getProductList(
  params: ProductParams = { category: [] }
): Promise<ProductListType> {
  const { category, tag } = params

  if (category.length === 0) return getAllProducts()

  const categories: NonEmptyArrayOf<string> =
    typeof category === 'string'
      ? [category]
      : ([...category] as NonEmptyArrayOf<string>)

  if (!tag || tag.length === 0) return getProductListFromCategory(categories)

  const tags: NonEmptyArrayOf<string> =
    typeof tag === 'string' ? [tag] : ([...tag] as NonEmptyArrayOf<string>)
  return getProductListFromTags(categories, tags)
}

export async function getProduct(id: string): Promise<ProductDetails> {
  const product = await prisma.product.findUnique({
    select: ProductSelect,
    where: { id }
  })

  if (!product) throw new Error('Error when retrieving product detail')

  return productToData(product) as ProductDetails
}
