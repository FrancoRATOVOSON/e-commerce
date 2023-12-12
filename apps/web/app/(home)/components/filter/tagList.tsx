'use client'

import React from 'react'
import { TagsList } from 'ui'
import { getTagsList } from 'utils/faker'

export default function TagList() {
  return (
    <div className='w-full'>
      <TagsList tags={getTagsList(6)} tagsSize='Small' tagsType='Toggle' />
    </div>
  )
}
