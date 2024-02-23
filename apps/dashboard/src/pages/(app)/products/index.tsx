import React from 'react'

import { Page } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'

export default function Products() {
  const setHeader = useSetHeader()
  const setWindowTitle = useSetWindowTitle()

  setHeader({ title: 'Produits' })
  setWindowTitle(base => `${base} - Produits`)

  return <Page className="flex justify-center items-center">Products</Page>
}
