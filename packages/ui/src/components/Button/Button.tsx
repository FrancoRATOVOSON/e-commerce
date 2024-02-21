import React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { Button as ButtonBase, buttonVariants } from '../../shadcn/button'
import { cn } from '../../utils'

const extendedButtonVariants = cva('', {
  defaultVariants: {
    fullWidth: false,
    variant: 'default'
  },
  variants: {
    fullWidth: {
      true: 'w-full'
    },
    size: {
      default: buttonVariants({ size: 'default' }),
      icon: buttonVariants({ size: 'icon' }),
      lg: buttonVariants({ size: 'lg' }),
      sm: buttonVariants({ size: 'sm' })
    },
    variant: {
      action: cn(buttonVariants({ variant: 'default' }), 'hover:bg-sld-base'),
      default: buttonVariants({ variant: 'default' }),
      destructive: buttonVariants({ variant: 'destructive' }),
      ghost: buttonVariants({
        className: 'bg-background text-foreground',
        variant: 'ghost'
      }),
      link: buttonVariants({ variant: 'link' }),
      outline: cn(
        buttonVariants({ className: 'text-foreground', variant: 'outline' })
      ),
      secondary: buttonVariants({ variant: 'secondary' })
    }
  }
})

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
