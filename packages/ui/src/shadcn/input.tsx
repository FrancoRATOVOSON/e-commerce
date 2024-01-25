import * as React from 'react'

import { cn } from '../utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      className={cn(
        [
          'flex h-10 w-full bg-background px-3 py-2 text-sm',
          'rounded-md border border-input ring-offset-background',
          'file:border-0 file:text-sm file:font-medium file:bg-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground',
          'focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
        ],
        className
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export default Input
