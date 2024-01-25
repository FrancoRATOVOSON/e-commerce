'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { TagsList } from 'ui'
import { TagType } from 'utils/types'

interface TagListProps {
  tags: TagType[]
  searchKey: 'tag' | 'category'
}

export default function TagList({ tags, searchKey }: TagListProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const tagList = new Set(params.getAll(searchKey))

  const pathName = usePathname()
  const { replace } = useRouter()

  const onTagToggle = (tag: TagType | string, state: boolean) => {
    if (typeof tag === 'string') return

    if (tagList.has(tag.id) && state) tagList.delete(tag.id)
    else tagList.add(tag.id)

    params.delete(searchKey)
    tagList.forEach(_tag => params.append(searchKey, _tag))

    replace(`${pathName}?${params.toString()}`)
  }

  const initialState = (current: TagType | string) => {
    if (typeof current === 'string') return false
    return tagList.has(current.id)
  }

  return (
    <div className="w-full">
      <TagsList
        tags={tags}
        tagsSize="Small"
        tagsType="Toggle"
        onToggle={onTagToggle}
        initialState={initialState}
        onEmptyMessage="No category found"
      />
    </div>
  )
}
