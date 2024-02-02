import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../utils'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
    'ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-50'
  ],
  {
    compoundVariants: [
      {
        className: 'text-primary-foreground bg-primary',
        variant: ['action', 'primary']
      },
      {
        className: 'hover:text-foreground/80 hover:border hover:border-border',
        size: 'icon',
        variant: 'ghost'
      }
    ],
    defaultVariants: {
      size: 'normal',
      variant: 'primary'
    },
    variants: {
      size: {
        icon: 'w-9 h-9',
        normal: 'px-3 h-9',
        'small-icon': 'w-6 h-6'
      },
      variant: {
        action: 'hover:bg-sld-base',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        ghost: '',
        primary: 'hover:bg-primary/90',
        secondary:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      }
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, variant, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ className, size, variant }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
)

export default Button
