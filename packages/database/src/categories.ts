import { Category, Tag } from 'utils/types'
import prisma from './client'

export function getCategories():Promise<Category[]>{
  return prisma.category.findMany({ select: { name: true, slug: true } })
}

export async function getTags(category:Category):Promise<Tag[]>{
  return prisma.tag.findMany({
    where: { categorySlug: category.slug },
    select: { label: true, slug: true }
  })
}
