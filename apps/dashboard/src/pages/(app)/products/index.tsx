import React from 'react'

import { Page } from '@/components'
import { useSetHeader } from '@/hooks'

export default function Products() {
  const setHeader = useSetHeader()

  setHeader({ title: 'Produits' })

  return <Page className="flex justify-center items-center">Products</Page>
}
