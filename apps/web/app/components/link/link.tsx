import React from 'react'
// eslint-disable-next-line import/no-named-default
import {default as NextLink, LinkProps as NextLinkProps} from 'next/link'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
  className?: string
  contentType?: 'text' | 'icon'
}

export default function Link({
  className='',
  contentType='text',
  children,
  ...props
}:LinkProps) {
  return (
    <NextLink
    className={`${className} 
    hover:text-dark-sld-hover transition 
    ${contentType === 'text' ? 'text-sld-base hover:underline underline-offset-4'
    : 'text-inherit w-fit h-fit'}`}
    {...props}>
      {children}
    </NextLink>
  )
}
