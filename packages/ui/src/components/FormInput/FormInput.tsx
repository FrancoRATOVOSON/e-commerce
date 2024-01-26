import React from 'react'

import Input from '../../shadcn/input'

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
        <Input
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
