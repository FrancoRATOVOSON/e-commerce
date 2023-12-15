import React from 'react'
import { getCategories } from '@/lib/data'
import FilterSection from './filterSection'
import TagList from './tagList'

export default async function CategoriesList() {
  const categories = await getCategories()
  
  if (categories.length === 0) return null

  return (
    <FilterSection label='Par catégories :'>
      <TagList tags={categories}/>
    </FilterSection>
  )
}
