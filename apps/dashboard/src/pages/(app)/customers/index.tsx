import React from 'react'

import { Page } from '@/components'

import { useSetHeader } from '../overview/_hooks'

export default function Customer() {
  const setHeader = useSetHeader()

  setHeader({ title: 'Clients' })

  return <Page className="flex justify-center items-center">Customer</Page>
}
