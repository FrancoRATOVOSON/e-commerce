import * as React from 'react'

import { Themer } from './components'

import 'style-config/style.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Themer />
        {children}
      </body>
    </html>
  )
}
