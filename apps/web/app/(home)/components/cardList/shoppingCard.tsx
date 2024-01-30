'use client'

import React from 'react'

import {
  productModal,
  useOpenAlertModal,
  useProductModalStore
} from '@/(home)/lib'
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

  const handleValidation = () => {
    if (!isConnected) openAlertModal()
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
