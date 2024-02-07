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
    </div>
  )
}
