'use client'

import React, { Suspense } from 'react'

import {
  productModal,
  useCloseProductModal,
  useProductModal
} from '@/(home)/lib'
import { BigCardSkeleton, Dialog } from 'ui'

import BigCard from './bigCard'

export default function ProductModal() {
  const { product } = useProductModal()
  const close = useCloseProductModal()

  return (
    <Dialog context={productModal}>
      <Suspense fallback={<BigCardSkeleton />}>
        <BigCard onCloseAction={close} product={product} />
      </Suspense>
    </Dialog>
  )
}
