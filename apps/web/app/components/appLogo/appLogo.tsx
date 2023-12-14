'use client'

import React from 'react'
import { AppLogo as Logo } from 'ui'
import { AppLogoProps } from 'ui/types'
import Link from '../link'

export default function AppLogo({
  className='', scale=0.4, ...props
}:Omit<AppLogoProps, 'ref'>) {
  return (
    <Link href={'/'} contentType='icon'>
      <Logo
      className={`${className} fill-light-text-high dark:fill-dark-text-high`}
      scale={scale}
      {...props}/>
    </Link>
  )
}
