'use client'

import React from 'react'

import { Theme } from 'ui/utils'

export default function Themer({ children }: { children: React.ReactNode }) {
  return <Theme>{children}</Theme>
  // return <>{children}</>
}
