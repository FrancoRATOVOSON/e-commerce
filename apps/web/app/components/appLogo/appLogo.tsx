'use client'

import React from 'react'

import Link from 'next/link'
import { AppLogo as Logo } from 'ui/components'
import { AppLogoProps } from 'ui/types'

export default function AppLogo({
  className = '',
  scale = 0.4,
  ...props
}: Omit<AppLogoProps, 'ref'>) {
  return (
    <Link
      className="text-inherit h-fit text-decoration-none outline-none border-none"
      href={'/'}
    >
      <Logo
        className={`${className} fill-foreground`}
        scale={scale}
        {...props}
      />
    </Link>
  )
}
