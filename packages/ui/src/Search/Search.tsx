import React from 'react'
import styles from './Search.module.css'
import { MagnifyingGlassIcon } from '../Icons'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {}

export default function Search({
  placeholder= 'Search...',
  className,
  ...props
}:SearchProps) {
  return (
    <div className={`${styles.search} ${className ?? ''}`}>
      <div className={styles.iconContainer}>
        <MagnifyingGlassIcon className={styles.icon} size={20}/>
      </div>
      <input
      className={styles.input}
      placeholder={placeholder}
      type='text'
      {...props}/>
    </div>
  )
}
