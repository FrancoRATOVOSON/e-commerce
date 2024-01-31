import * as React from 'react'

import { ThemeProvider, useTheme } from 'next-themes'

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export { Theme, useTheme }
