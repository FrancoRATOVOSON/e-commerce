'use client'

import React from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ToggleGroup } from 'ui'
import { TagType } from 'utils/types'

interface TagListProps {
  searchKey: 'category' | 'tag'
  tags: TagType[]
}

export default function TagList({ searchKey, tags }: TagListProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const tagList = new Set(params.getAll(searchKey))

  const pathName = usePathname()
  const { replace } = useRouter()

  // const onTagToggle = (tag: TagType | string, state: boolean) => {
  //   if (typeof tag === 'string') return

  //   if (tagList.has(tag.id) && state) tagList.delete(tag.id)
  //   else tagList.add(tag.id)

  //   params.delete(searchKey)
  //   tagList.forEach(_tag => params.append(searchKey, _tag))

  //   replace(`${pathName}?${params.toString()}`)
  // }

  const onValueChange = (values: string[]) => {
    if (searchKey === 'category' && values.length === 0) params.delete('tag')

    params.delete(searchKey)
    values.forEach(value => params.append(searchKey, value))

    replace(`${pathName}?${params.toString()}`)
  }

  const initialState = (current: string) => tagList.has(current)

  return (
    <div className="w-full">
      <ToggleGroup
        data={tags.map(({ id, value }) => ({
          display: value,
          value: id
        }))}
        initialState={initialState}
        onValueChange={onValueChange}
        type="multiple"
        variant={'outline'}
      />
      {/* <TagsList
        initialState={initialState}
        onEmptyMessage="No category found"
        onToggle={onTagToggle}
        tags={tags}
        tagsSize="Small"
        tagsType="Toggle"
      /> */}
    </div>
  )
}
