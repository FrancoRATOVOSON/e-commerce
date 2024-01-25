import { cva } from 'class-variance-authority'
import React from 'react'

const styledInput = cva([
  'h-10 px-2 box-border w-full',
  'bg-light-bg-lower dark:bg-dark-bg-lower',
  'dark:focus:bg-dark-bg-low focus:bg-light-bg-low',
  'border rounded border-light-bd-base',
  'focus:border-light-bd-active focus:outline-none focus:border-2',
  'dark:focus:border'
])

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  type: 'text' | 'email' | 'password'
  ErrorMessage?: React.ReactNode
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, type, name, className = '', ErrorMessage, ...props }, ref) => (
    <div
      className={`
    ${className} flex flex-col gap-1 justify-start items-start
    `}
    >
      <label htmlFor={name || label} className="font-medium">
        {label}
      </label>
      <div className="flex flex-col gap-1 justify-start items-start w-full">
        <input
          type={type}
          name={name || label}
          id={name || label}
          className={styledInput()}
          ref={ref}
          {...props}
        />
        {ErrorMessage || null}
      </div>
    </div>
  )
)

export default FormInput
