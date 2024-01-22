import { GetProductListParams, NonEmptyArrayOf, ProductCardInfos, ProductPageInfos } from "utils/types";
import prisma, { Product } from './client'

type ProductListType = Promise<ProductCardInfos[]>

type PrismaProductCardInfos = Pick<Product, 'id' | 'name' | 'price' | 'currency' | 'image'>

function productToProductCardInfo(product:PrismaProductCardInfos):ProductCardInfos{
  const {id, name, price, currency, image} = product
  return {
    productId: id, name,
    price: { value: price.toNumber(), currency },
    image: { src: image, alt: name}
  }
}

function productListToProductCardInfoList(products:PrismaProductCardInfos[]):ProductCardInfos[]{
  return products.map(product => productToProductCardInfo(product))
}

async function getProductListFromCategory(category:NonEmptyArrayOf<string>):ProductListType{
  const products:PrismaProductCardInfos[] = await prisma.product.findMany({
    where: { category: { slug: { in: category } }}
  })

  return productListToProductCardInfoList(products)
}

async function getProductListFromTags(
  category:NonEmptyArrayOf<string>,tags:NonEmptyArrayOf<string>
):ProductListType {
  const products:PrismaProductCardInfos[] = await prisma.product.findMany({
    where: {
      AND: [{ category: { slug: { in: category }}}, { tags: { some: { tagSlug: { in: tags} }}}]
    }
  })

  return productListToProductCardInfoList(products)
}

async function getAllProducts():ProductListType {
  const products:PrismaProductCardInfos[] = await prisma.product.findMany()

  return productListToProductCardInfoList(products)
}

export function getProductList(params:GetProductListParams={category:[]}):ProductListType{
  const { category, tag } = params
  
  if (category.length === 0) return getAllProducts()
  
  const categories:NonEmptyArrayOf<string> = typeof category === 'string' ? [category] : [...category] as NonEmptyArrayOf<string>

  if (!tag || tag.length === 0) return getProductListFromCategory(categories)

  const tags:NonEmptyArrayOf<string> = typeof tag === 'string' ? [tag] : [...tag] as NonEmptyArrayOf<string>
  return getProductListFromTags(categories, tags)
}

export async function getProductDetails({productId, name, price, image}:ProductCardInfos):Promise<ProductPageInfos>{
  const detailedProduct = await prisma.product.findUnique({
    where: { id: productId },
    select: {
      description: true,
      category: { select: { name: true } },
      tags: { select: { tag: { select: { label: true } } } }
    }
  })

  if (!detailedProduct) throw new Error("Error when retrieving product detail")

  const { description, category, tags } = detailedProduct
  return {
    productId, name, image, price, description,
    category: category.name,
    tags: tags.map(tag => tag.tag.label)
  }
}