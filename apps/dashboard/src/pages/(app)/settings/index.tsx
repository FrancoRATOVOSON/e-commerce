import React from 'react'

import { Page } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'

export default function Settings() {
  const setHeader = useSetHeader()
  const setWindowTitle = useSetWindowTitle()

  setHeader({ title: 'Paramètres' })
  setWindowTitle(base => `${base} - Paramètres`)

  return <Page className="flex justify-center items-center">Settings</Page>
}
