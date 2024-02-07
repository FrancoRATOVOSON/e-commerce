import * as React from 'react'

import { Metadata } from 'next/types'

import { Global } from './components'

export const metadata: Metadata = {
  description: 'Shop better',
  title: 'YShop'
}

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <Global>{children}</Global>
}
