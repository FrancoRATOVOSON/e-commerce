'use client'

import React from 'react'

import {
  productModal,
  useOpenAlertModal,
  useProductModalStore
} from '@/(home)/lib'
import { addToCart, handleServerAction } from '@/lib'
import { useIsUserConnected } from '@/stores'
import { InteractiveCard, useShowDialog } from 'ui'
import { ProductCardInfos } from 'utils/types'

interface ShoppingCardProps {
  className?: string
  product: ProductCardInfos
}

export default function ShoppingCard({
  className = '',
  product
}: ShoppingCardProps) {
  const openModal = useShowDialog(productModal)
  const setOpenModal = useProductModalStore(state => state.openModal)
  const openAlertModal = useOpenAlertModal()
  const isConnected = useIsUserConnected()

  const handleValidation = async (id: string) => {
    if (!isConnected) openAlertModal()
    else
      handleServerAction({
        serverAction: () => addToCart(id),
        success: {
          message: `Vous avez ajouté ${product.name} à votre panier`,
          title: 'Ajouté'
        }
      })
  }

  return (
    <InteractiveCard
      actionLabel="Ajouter au panier"
      className={className}
      onClickAction={() => {
        openModal()
        setOpenModal(product)
      }}
      primaryAction={handleValidation}
      product={product}
    />
  )
}
