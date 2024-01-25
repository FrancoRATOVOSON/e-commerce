import React, { memo } from 'react'

import { TagChipActionType, TagChipSizeType } from '@/types'
import { TagType } from 'utils/types'

import TagChip, { TagChipSkeleton } from '../TagChip'

interface TagsListProps extends React.HTMLAttributes<HTMLDivElement> {
  initialState?: (current: TagType | string) => boolean
  onEmptyMessage?: string
  onRemove?: (tag: TagType | string) => void
  onToggle?: (tag: TagType | string, state: boolean) => void
  tags: Array<TagType> | Array<string>
  tagsSize?: TagChipSizeType
  tagsType?: TagChipActionType
}

export default function TagsList({
  className = '',
  initialState,
  onEmptyMessage = 'No item found',
  onRemove,
  onToggle,
  tags,
  tagsSize = 'Small',
  tagsType = 'None',
  ...props
}: TagsListProps) {
  return (
    <div
      className={`${className} 
    flex flex-row justify-start items-center gap-x-2 
    w-full overflow-auto no-scrollbar py-1`}
      {...props}
    >
      {tags.length > 0 ? (
        tags.map(tag => (
          <TagChip
            action={tagsType}
            initialState={initialState ? initialState(tag) : false}
            key={typeof tag === 'string' ? tag : tag.id}
            label={typeof tag === 'string' ? tag : tag.value}
            onClick={state => onToggle && onToggle(tag, state)}
            onRemove={() => onRemove && onRemove(tag)}
            size={tagsSize}
            theme="Base"
          />
        ))
      ) : (
        <span className="font-medium italic text-secondary-foreground/50">
          {onEmptyMessage}
        </span>
      )}
    </div>
  )
}

export const TagsListSkeleton = memo(() => (
  <div className="flex flex-row items-center justify-start py-1 gap-x-2 w-fit">
    <TagChipSkeleton />
    <TagChipSkeleton />
    <TagChipSkeleton />
  </div>
))
