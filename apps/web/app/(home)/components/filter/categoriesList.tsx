import React from 'react'
import { getCategories } from '@/lib/data'
import FilterSection from './filterSection'
import TagList from './tagList'

export default async function CategoriesList() {
  const categories = await getCategories()

  return (
    <FilterSection label='Par catégories :'>
      <TagList tags={categories.map(({name, slug}) => ({id: slug, value: name}))}/>
    </FilterSection>
  )
}
