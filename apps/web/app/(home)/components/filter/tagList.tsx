import React from 'react'
import { TagsList } from 'ui'
import { getTagsList } from '@/lib'

export default function TagList() {
  return (
    <div className='w-full'>
      <TagsList tags={getTagsList(10)} />
    </div>
  )
}
