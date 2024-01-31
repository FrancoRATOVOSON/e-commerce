import { Category, Tag } from 'utils/types'

import prisma from '../client'

export function getCategories(): Promise<Category[]> {
  return prisma.category.findMany({ select: { name: true, slug: true } })
}

export async function getTags(category?: string | string[]): Promise<Tag[]> {
  if (!category || category.length === 0) return []

  const tags = await prisma.tag.findMany({
    select: { category: { select: { slug: true } }, label: true, slug: true },
    where: {
      categorySlug: typeof category === 'string' ? category : { in: category }
    }
  })

  return tags.map(({ category: { slug: categorySlug }, label, slug }) => ({
    category: categorySlug,
    label,
    slug
  }))
}
