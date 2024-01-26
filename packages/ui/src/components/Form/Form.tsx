import React from 'react'

import Label from '../../shadcn/label'
import { cn } from '../../utils'

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form className={cn(className)} ref={ref} {...props} />
))

const FormInputContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={`
    ${className} space-y-2 justify-start items-start
    `}
    ref={ref}
    {...props}
  />
))

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn('text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
))

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn('text-sm text-error-foreground font-medium', className)}
    ref={ref}
    {...props}
  />
))

const FormLabel = Label

export { Form, FormDescription, FormInputContainer, FormLabel, FormMessage }
