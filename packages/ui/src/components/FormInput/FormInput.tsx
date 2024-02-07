import React from 'react'

import { FormDescription, FormInputContainer, FormLabel, FormMessage } from '..'
import Input from '../../shadcn/input'
import { cn } from '../../utils'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string
  label: string
  error?: {
    message?: string
  }
}

const FormInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, description, error, id, label, ...props }, ref) => (
    <FormInputContainer className={cn(className)}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <div className="space-y-0">
        <Input {...props} ref={ref} />
        {error?.message && <FormMessage>{error.message}</FormMessage>}
      </div>
      {description && <FormDescription>{description}</FormDescription>}
    </FormInputContainer>
  )
)

export default FormInput
