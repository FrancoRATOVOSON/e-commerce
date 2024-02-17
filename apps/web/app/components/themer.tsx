'use client'

import React from 'react'

import { ThemeProvider } from 'ui/components'

export default function Themer({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
  // return <>{children}</>
}
