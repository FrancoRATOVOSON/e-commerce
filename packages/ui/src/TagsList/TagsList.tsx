import React from 'react'
import Toggle from '../Toggle'

interface TagListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: Array<string>
  onToggle?: (tag: string, state:boolean) => void
  initialState?: boolean
}

export default function TagList({
  tags,
  className='',
  initialState=false,
  onToggle,
  ...props
}:TagListProps) {
  return (
    <div
    className={`${className} flex flex-col`}
    {...props}>
      {tags.map(tag => {
        return (
          <Toggle
          initialState={initialState}
          onToggle={state => onToggle && onToggle(tag,state)}>
            {tag}
          </Toggle>
        )
      })}
    </div>
  )
}
