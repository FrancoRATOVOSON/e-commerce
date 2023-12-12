import React from 'react'
import Toggle from '../Toggle'
import styles from './TagsList.module.css'

interface TagsListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: Array<string>
  onToggle?: (tag: string, state:boolean) => void
  initialState?: boolean
}

export default function TagsList({
  tags,
  className='',
  initialState=false,
  onToggle,
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
          <Toggle
          className={(state) =>
            `${styles.tag} ${state ? styles.tag_selected : styles.tag_off}`
          }
          initialState={initialState}
          onToggle={state => onToggle && onToggle(tag,state)}
          key={tag}>
            {tag}
          </Toggle>
        )
      })}
    </div>
  )
}
