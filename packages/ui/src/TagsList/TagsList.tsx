'use client'

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
    className={`${className} ${styles.list}`}
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
