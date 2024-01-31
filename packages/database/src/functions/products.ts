import {
  GetProductListParams,
  NonEmptyArrayOf,
  ProductCardInfos,
  ProductPageInfos
} from 'utils/types'

import prisma, { Product } from '../client'

type ProductListType = Promise<ProductCardInfos[]>

type PrismaProductCardInfos = Pick<
  Product,
  'currency' | 'id' | 'image' | 'name' | 'price'
>

export function productToProductCardInfo(
  product: PrismaProductCardInfos
): ProductCardInfos {
  const { currency, id, image, name, price } = product
  return {
    image: { alt: name, src: image },
    name,
    price: { currency, value: price.toNumber() },
    productId: id
  }
}

function productListToProductCardInfoList(
  products: PrismaProductCardInfos[]
): ProductCardInfos[] {
  return products.map(product => productToProductCardInfo(product))
}

async function getProductListFromCategory(
  category: NonEmptyArrayOf<string>
): ProductListType {
  const products: PrismaProductCardInfos[] = await prisma.product.findMany({
    where: { category: { slug: { in: category } } }
  })

  return productListToProductCardInfoList(products)
}

async function getProductListFromTags(
  category: NonEmptyArrayOf<string>,
  tags: NonEmptyArrayOf<string>
): ProductListType {
  const products: PrismaProductCardInfos[] = await prisma.product.findMany({
    where: {
      category: { slug: { in: category } },
      tags: { some: { tagSlug: { in: tags } } }
    }
  })

  return productListToProductCardInfoList(products)
}

async function getAllProducts(): ProductListType {
  const products: PrismaProductCardInfos[] = await prisma.product.findMany()

  return productListToProductCardInfoList(products)
}

export function getProductList(
  params: GetProductListParams = { category: [] }
): ProductListType {
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

export async function getProductDetails({
  image,
  name,
  price,
  productId
}: ProductCardInfos): Promise<ProductPageInfos> {
  const detailedProduct = await prisma.product.findUnique({
    select: {
      category: { select: { name: true } },
      description: true,
      tags: { select: { tag: { select: { label: true } } } }
    },
    where: { id: productId }
  })

  if (!detailedProduct) throw new Error('Error when retrieving product detail')

  const { category, description, tags } = detailedProduct
  return {
    category: category.name,
    description,
    image,
    name,
    price,
    productId,
    tags: tags.map(tag => tag.tag.label)
  }
}
