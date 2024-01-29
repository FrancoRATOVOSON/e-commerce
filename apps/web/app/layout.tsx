import * as React from 'react'

import { Global } from './components'
import { getUserState } from './lib'

import 'style-config/style.css'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const userState = await getUserState()

  return (
    <html lang="fr">
      <body>
        <Global isUserConnected={userState}>{children}</Global>
      </body>
    </html>
  )
}
