'use client'

import React from 'react'

// eslint-disable-next-line import/no-named-default
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { Link as UILink, LinkProps as UILinkProps } from 'ui'

interface LinkProps extends Omit<NextLinkProps, 'href'>, UILinkProps {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ ...props }, ref) => <UILink element={NextLink} ref={ref} {...props} />
)

Link.displayName = 'Link'

export default Link
