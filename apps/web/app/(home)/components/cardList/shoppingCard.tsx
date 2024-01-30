'use client'

import React from 'react'

import { productModal, useProductModalStore } from '@/(home)/lib'
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

  return (
    <InteractiveCard
      actionLabel="Ajouter au panier"
      className={className}
      onClickAction={() => {
        openModal()
        setOpenModal(product)
      }}
      product={product}
    />
  )
}
