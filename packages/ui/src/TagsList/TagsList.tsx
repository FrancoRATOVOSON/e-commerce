import React from 'react'
import TagChip from '../TagChip'
import { TagChipActionType, TagChipSizeType } from '../../types'

interface TagsListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: Array<string>
  onToggle?: (tag: string, state:boolean) => void
  onRemove?:(tag:string) => void
  tagsType?: TagChipActionType
  tagsSize?: TagChipSizeType
}

export default function TagsList({
  tags,
  className='',
  onToggle,
  onRemove,
  tagsType='None',
  tagsSize='Small',
  ...props
}:TagsListProps) {
  return (
    <div
    className={`${className} 
    flex flex-row justify-start items-center gap-x-2 
    w-full overflow-auto no-scrollbar py-1`}
    {...props}>
      {tags.map(tag => {
        return (
          <TagChip
          label={tag}
          key={tag}
          initialState={false}
          action={tagsType}
          size={tagsSize}
          theme='Base'
          onClick={state => onToggle && onToggle(tag,state)}
          onRemove={() => onRemove && onRemove(tag)}/>
        )
      })}
    </div>
  )
}
