import React, { memo } from 'react'
import TagChip, { TagChipSkeleton } from '../TagChip'
import { TagChipActionType, TagChipSizeType } from '../types'
import { TagType } from 'utils/types'



interface TagsListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: Array<string> | Array<TagType>
  onToggle?: (tag: string | TagType, state:boolean) => void
  onRemove?:(tag:string | TagType) => void
  tagsType?: TagChipActionType
  tagsSize?: TagChipSizeType
  onEmptyMessage?: string
  initialState?: (current:string | TagType) => boolean
}

export default function TagsList({
  tags,
  className='',
  onToggle,
  onRemove,
  initialState,
  tagsType='None',
  tagsSize='Small',
  onEmptyMessage='No item found',
  ...props
}:TagsListProps) {
  return (
    <div
    className={`${className} 
    flex flex-row justify-start items-center gap-x-2 
    w-full overflow-auto no-scrollbar py-1`}
    {...props}>
      {
        tags.length > 0
        ? tags.map(tag => {
            return (
              <TagChip
              label={typeof tag === "string" ? tag : tag.value}
              key={typeof tag === "string" ? tag : tag.id}
              initialState={initialState ? initialState(tag) : false}
              action={tagsType}
              size={tagsSize}
              theme='Base'
              onClick={state => onToggle && onToggle(tag,state)}
              onRemove={() => onRemove && onRemove(tag)}/>
            )
          })
        : <span className='font-medium italic text-light-text-low dark:text-dark-text-low' >{onEmptyMessage}</span>
      }
    </div>
  )
}

export const TagsListSkeleton = memo(() => (
  <div className='flex flex-row items-center justify-start py-1 gap-x-2 w-fit'>
    <TagChipSkeleton/>
    <TagChipSkeleton/>
    <TagChipSkeleton/>
  </div>
))
