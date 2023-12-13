import React from 'react'
import { MagnifyingGlassIcon } from '../Icons'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export default function Search({
  placeholder= 'Search...',
  className,
  ...props
}:SearchProps) {
  return (
    <div className={`
    flex flex-row justify-start items-center gap-1 h-10 rounded overflow-clip
    border border-light-text-low dark:border-dark-text-low
    focus-within:border-2 focus-within:border-light-text-high
    dark:focus-within:border-dark-text-high group/search
    ${className ?? ''}`}>
      <div className={`
      flex items-center justify-center w-10 h-10 
      text-light-text-low on-dark:border-dark-text-low
      `}>
        <MagnifyingGlassIcon
        className={`
        group-focus-within/search:text-light-text-high
        dark:group-focus-within/search:text-dark-text-high
        `}
        size={20}/>
      </div>
      <input
      className='w-full h-full my-1 outline-none bg-inherit'
      placeholder={placeholder}
      type='search'
      {...props}/>
    </div>
  )
}
