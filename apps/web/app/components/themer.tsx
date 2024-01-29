'use client'

import React from 'react'

import { ThemeProvider } from 'ui/utils'

export default function Themer({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
