'use client'

import React, { Suspense } from 'react'

import {
  productModal,
  useCloseProductModal,
  useOpenAlertModal,
  useProductModal
} from '@/(home)/lib'
import { useIsUserConnected } from '@/stores'
import { BigCardSkeleton, Dialog } from 'ui'

import BigCard from './bigCard'

export default function ProductModal() {
  const { product } = useProductModal()
  const closeProductModal = useCloseProductModal()
  const openAlertModal = useOpenAlertModal()
  const isConnected = useIsUserConnected()

  const handleValidation = () => {
    if (!isConnected) {
      closeProductModal()
      openAlertModal()
    }
  }

  return (
    <Dialog context={productModal}>
      <Suspense fallback={<BigCardSkeleton />}>
        <BigCard
          onAddToCart={handleValidation}
          onCloseAction={closeProductModal}
          product={product}
        />
      </Suspense>
    </Dialog>
  )
}
