import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../utils'

const badgeVariants = cva(
  'inline-flex items-center border  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    compoundVariants: [
      {
        className: 'rounded-md px-2.5 py-0.5',
        size: ['normal', 'large', 'sm']
      }
    ],
    defaultVariants: {
      size: 'normal',
      variant: 'default'
    },
    variants: {
      size: {
        large: 'text-base',
        normal: 'text-sm',
        sm: 'text-xs',
        xs: 'text-xs px-1 py-0 rounded-xl'
      },
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow ',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow',
        outline: 'text-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground '
      }
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, size, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ size, variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
