import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const buttonStyle = cva('transition px-3 rounded h-10 text-center', {
  compoundVariants: [
    {
      className: 'text-primary-foreground bg-primary',
      variant: ['action', 'primary']
    }
  ],
  defaultVariants: {
    variant: 'primary'
  },
  variants: {
    variant: {
      action: 'hover:bg-sld-base',
      primary: 'hover:bg-primary/90',
      secondary:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
    }
  }
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => (
    <button
      className={buttonStyle({ className, variant })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
)

export default Button
