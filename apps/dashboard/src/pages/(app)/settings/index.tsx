import React from 'react'

import { Page } from '@/components'
import { useSetHeader } from '@/hooks'

export default function Settings() {
  const setHeader = useSetHeader()

  setHeader({ title: 'Paramètres' })

  return <Page className="flex justify-center items-center">Settings</Page>
}
