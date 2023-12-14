import React from 'react'
import styles from './Button.module.css'

export type ButtonTypes = 'Primary' | 'Secondary' | 'Glass'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes
  buttonType?: 'submit' | 'reset' | 'button'
}

export default function Button({
  type='Primary', className='', buttonType='button',
  children, ...props
}:ButtonProps) {
  return (
    <button
    className={
      `${className}
      transition px-3 rounded h-10 text-center
      ${
        type === 'Primary' ? styles.primary :
        type === 'Secondary' ? styles.secondary :
        styles.glass
      }`
    }
    type={buttonType}
    {...props}
    >
      {children}
    </button>
  )
}
