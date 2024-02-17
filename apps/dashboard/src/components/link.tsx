'use client'

import React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'

import { Link as UILink, LinkProps as UILinkProps } from 'ui'

interface LinkProps extends RouterLinkProps, Omit<UILinkProps, 'href'> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => (
    <UILink
      element={({ href }: { href: string }) => (
        <RouterLink to={to || href} {...props} />
      )}
      ref={ref}
      variant={'nav'}
      {...props}
    />
  )
)

Link.displayName = 'Link'

export default Link
