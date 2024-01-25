import React from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const buttonStyle = cva('transition px-3 rounded h-10 text-center', {
  defaultVariants: {
    variant: 'Primary'
  },
  variants: {
    variant: {
      Glass: [
        'text-light-text-high bg-white-70 backdrop-blur-sm',
        'shadow-md shadow-white-40',
        'hover:bg-white-90 hover:backdrop-blur-md'
      ],
      Primary: [
        'bg-dark-bg-lower text-dark-text-high',
        'on-dark:bg-light-bg-lower on-dark:text-light-text-high',
        'hover:bg-sld-base'
      ],
      Secondary: [
        'text-light-text-high border border-black',
        'on-dark:text-dark-text-high on-dark:border-white',
        'hover:text-sld-base hover:border-sld-base'
      ]
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
