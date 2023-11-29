import React from 'react'
import styles from './Button.module.css'

export type ButtonTypes = 'Primary' | 'Secondary'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes
}

export default function Button({type, className, children, ...props}:ButtonProps) {
  return (
    <button
    className={
      `${className} ${styles.button} ${type === 'Primary' ? styles.primary : styles.secondary}`
    }  
    {...props}
    >
      {children}
    </button>
  )
}
