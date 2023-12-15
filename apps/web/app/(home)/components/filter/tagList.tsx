'use client'

import React from 'react'
import { TagsList } from 'ui'

interface TagListProps {
  tags: string[]
}

export default function TagList({tags}:TagListProps) {
  
  return (
    <div className='w-full'>
      <TagsList tags={tags} tagsSize='Small' tagsType='Toggle' />
    </div>
  )
}
