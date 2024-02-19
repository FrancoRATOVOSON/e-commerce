import React from 'react'

import { Page } from '@/components'

import { useSetHeader } from '../overview/_hooks'

export default function Products() {
  const setHeader = useSetHeader()

  setHeader({ title: 'Produits' })

  return <Page className="flex justify-center items-center">Products</Page>
}
