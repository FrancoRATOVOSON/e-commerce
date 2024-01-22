'use client'

import React from 'react'
import { TagsList } from 'ui'
import { TagType } from 'utils/types'

interface TagListProps {
  tags: string[] | TagType[]
}

export default function TagList({tags}:TagListProps) {
  
  return (
    <div className='w-full'>
      <TagsList tags={tags} tagsSize='Small' tagsType='Toggle' />
    </div>
  )
}
