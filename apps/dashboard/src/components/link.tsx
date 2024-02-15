'use client'

import React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'

import { buttonVariants } from 'ui'
import { VariantProps, cva } from 'ui/utils'

const linkVariants = cva('transition', {
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      button: buttonVariants({ variant: 'primary' }),
      default:
        ' text-sld-base hover:underline underline-offset-4 hover:text-dark-sld-hover',
      icon: buttonVariants({ size: 'icon', variant: 'ghost' }),
      logo: 'text-inherit h-fit'
    }
  }
})

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    RouterLinkProps,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => (
    <RouterLink
      className={linkVariants({ className, variant })}
      ref={ref}
      {...props}
    />
  )
)

Link.displayName = 'Link'

export default Link
