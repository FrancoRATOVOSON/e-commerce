import React from 'react'

import { cn } from '@/utils'

const styledInput = cn([
  'h-10 px-2 box-border w-full',
  'bg-light-bg-lower dark:bg-dark-bg-lower',
  'dark:focus:bg-dark-bg-low focus:bg-light-bg-low',
  'border rounded border-light-bd-base',
  'focus:border-light-bd-active focus:outline-none focus:border-2',
  'dark:focus:border'
])

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ErrorMessage?: React.ReactNode
  label: string
  type: 'email' | 'password' | 'text'
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ ErrorMessage, className = '', label, name, type, ...props }, ref) => (
    <div
      className={`
    ${className} flex flex-col gap-1 justify-start items-start
    `}
    >
      <label className="font-medium" htmlFor={name || label}>
        {label}
      </label>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <input
          className={styledInput}
          id={name || label}
          name={name || label}
          ref={ref}
          type={type}
          {...props}
        />
        {ErrorMessage || null}
      </div>
    </div>
  )
)

export default FormInput
