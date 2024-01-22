import { ProductCardInfos, ProductPageInfos } from "utils/types";
import prisma from './client'

export async function getProductList():Promise<ProductCardInfos[]>{
  const products = await prisma.product.findMany({
    select : { id: true, name: true, price: true, currency: true, image: true }
  })

  return products.map(({id, name, price, currency, image}) => ({
    productId: id, name, price: { value: price.toNumber(), currency }, image
  }))
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