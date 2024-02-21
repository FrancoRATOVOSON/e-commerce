import React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { Button as ButtonBase, buttonVariants } from '../../shadcn/button'
import { cn } from '../../utils'

const extendedButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      fullWidth: false,
      size: 'default',
      variant: 'default'
    },
    variants: {
      fullWidth: {
        true: 'w-full'
      },
      size: {
        default: 'h-9 px-4 py-2',
        icon: 'h-9 w-9',
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3 text-xs'
      },
      variant: {
        action: cn(buttonVariants({ variant: 'default' }), 'hover:bg-sld-base'),
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
      }
    }
  }
)

interface ExtendedButtonProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ButtonBase>,
      'size' | 'variant'
    >,
    VariantProps<typeof extendedButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  ({ asChild = false, className, fullWidth, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          extendedButtonVariants({ className, fullWidth, size, variant })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
