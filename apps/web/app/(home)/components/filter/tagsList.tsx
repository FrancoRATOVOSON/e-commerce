import React from 'react'
import { getTags } from '@/lib'
import TagList from './tagList'
import FilterSection from './filterSection'

interface TagListProps {
  category?: string | string[]
}

export default async function TagsList({category: tagCategory}:TagListProps) {
  const tags = await getTags(tagCategory)
  
  if(tags.length === 0) return null

  return (
    <FilterSection label='Par tags :'>
      <TagList
      tags={tags.map(({slug, category, label}) => ({id: `${category} ${slug}`, value: label}))}
      searchKey='tag'/>
    </FilterSection>
  )
}
