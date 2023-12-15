import React from 'react'
import { getTags } from '@/lib'
import TagList from './tagList'
import FilterSection from './filterSection'

export default async function TagsList() {
  const tags = await getTags()
  
  if(tags.length === 0) return null

  return (
    <FilterSection label='Par tags :'>
      <TagList tags={tags}/>
    </FilterSection>
  )
}
