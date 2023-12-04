import React from 'react'

interface TagListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: Array<string>
}

export default function TagList({
  tags,
  className='',
  ...props
}:TagListProps) {
  return (
    <div
    className={`${className} flex flex-col`}
    {...props}>
      {tags}
    </div>
  )
}
