'use client'

import React from 'react'

import { Form as FormContainer } from 'ui/components'
import { cn } from 'ui/utils'

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <FormContainer
    className={cn('space-y-7 w-72', className)}
    ref={ref}
    {...props}
  />
))

Form.displayName = 'FormContainer'

export default Form
