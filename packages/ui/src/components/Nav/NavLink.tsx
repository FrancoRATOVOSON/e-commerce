import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { VariantProps, cn, cva } from '../../utils'
import { buttonVariants } from '../Button'

const linkVariants = cva(
  'transition data-[link=on]:bg-primary data-[link=on]:text-primary-foreground',
  {
    defaultVariants: {
      variant: 'nav'
    },
    variants: {
      variant: {
        icon: buttonVariants({ size: 'icon', variant: 'ghost' }),
        nav: [
          'flex flex-row justify-start items-center',
          'hover:bg-muted',
          'px-4 h-9 w-full space-x-4 rounded-md'
        ]
      }
    }
  }
)

interface NavLinkProps extends VariantProps<typeof linkVariants> {
  [key: string]: unknown
  children: React.ReactNode
  className?: string
  dataLink: 'off' | 'on'
}

function NavLink({
  children,
  className,
  dataLink,
  variant,
  ...props
}: NavLinkProps) {
  return (
    <Slot
      className={cn(linkVariants({ className, variant }))}
      data-link={dataLink}
      {...props}
    >
      {children}
    </Slot>
  )
}

export { NavLink, type NavLinkProps }
