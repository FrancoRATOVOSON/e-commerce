'use client'

import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Button, buttonVariants } from 'ui/components'
import { VariantProps } from 'ui/utils'

interface LinkProps
  extends React.ComponentProps<typeof RouterLink>,
    VariantProps<typeof buttonVariants> {}

function Link({ size, variant = 'link', ...props }: LinkProps) {
  return (
    <Button asChild size={size} variant={variant}>
      <RouterLink {...props} />
    </Button>
  )
}

Link.displayName = 'Link'

export default Link
