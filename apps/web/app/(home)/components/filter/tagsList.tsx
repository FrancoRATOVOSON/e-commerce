import React from 'react'

import { getTags } from '@/lib'

import FilterSection from './filterSection'
import TagList from './tagList'

interface TagListProps {
  category?: string | string[]
}

export default async function TagsList({
  category: tagCategory
}: TagListProps) {
  const tags = await getTags(tagCategory)

  if (tags.length === 0) return null

  return (
    <FilterSection label="Par tags :">
      <TagList
        searchKey="tag"
        tags={tags.map(({ category, label, slug }) => ({
          id: `${category} ${slug}`,
          value: label
        }))}
      />
    </FilterSection>
  )
}
