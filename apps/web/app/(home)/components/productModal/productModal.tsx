'use client'

import React, { Suspense } from 'react'

import {
  productModal,
  useCloseProductModal,
  useOpenAlertModal,
  useProductModal
} from '@/(home)/lib'
import { addToCart, handleServerAction } from '@/lib'
import { useIsUserConnected } from '@/stores'
import { Dialog, LargeProductSkeleton } from 'ui/components'

import BigCard from './bigCard'

export default function ProductModal() {
  const { product } = useProductModal()
  const closeProductModal = useCloseProductModal()
  const openAlertModal = useOpenAlertModal()
  const isConnected = useIsUserConnected()

  const handleValidation = async (id: string) => {
    if (!isConnected) {
      closeProductModal()
      openAlertModal()
    } else
      handleServerAction({
        serverAction: () => addToCart(id),
        success: {
          message: `Vous avez ajouté ${product.name} à votre panier`,
          title: 'Ajouté'
        }
      })
  }

  return (
    <Dialog context={productModal}>
      <Suspense fallback={<LargeProductSkeleton />}>
        <BigCard
          id={product.id}
          onAddToCart={handleValidation}
          onCloseAction={closeProductModal}
        />
      </Suspense>
    </Dialog>
  )
}
