'use client'

import React from 'react'

import NextLink from 'next/link'
import { Button, buttonVariants } from 'ui/components'
import { VariantProps, cn } from 'ui/utils'

interface LinkProps
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof buttonVariants> {}

function Link({ className, size, variant = 'link', ...props }: LinkProps) {
  return (
    <Button asChild size={size} variant={variant}>
      <NextLink
        className={cn(
          className,
          variant === 'link' &&
            'text-sld-base p-0 m-0 w-fit h-fit px-0 py-0 mx-0 my-0'
        )}
        {...props}
      />
    </Button>
  )
}

Link.displayName = 'Link'

export default Link
