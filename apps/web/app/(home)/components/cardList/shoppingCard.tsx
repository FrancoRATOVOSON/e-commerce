'use client'

import React from 'react'

import {
  productModal,
  useOpenAlertModal,
  useProductModalStore
} from '@/(home)/lib'
import { addToCart } from '@/lib'
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

  const handleValidation = (id: string) => {
    if (!isConnected) openAlertModal()
    else addToCart(id)
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
