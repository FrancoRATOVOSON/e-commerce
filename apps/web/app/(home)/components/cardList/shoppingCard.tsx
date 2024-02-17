'use client'

import React from 'react'

import {
  productModal,
  useOpenAlertModal,
  useProductModalStore
} from '@/(home)/lib'
import { addToCart, handleServerAction } from '@/lib'
import { useIsUserConnected } from '@/stores'
import { ProductData } from 'database/types'
import Image from 'next/image'
import { InteractiveProductCard, useShowDialog } from 'ui/components'

interface ShoppingCardProps {
  className?: string
  product: ProductData
}

export default function ShoppingCard({
  className = '',
  product
}: ShoppingCardProps) {
  const { name } = product
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
          message: `Vous avez ajouté ${name} à votre panier`,
          title: 'Ajouté'
        }
      })
  }

  return (
    <InteractiveProductCard
      buttonLabel="Ajouter au panier"
      className={className}
      imageComponent={({ alt, ...props }) => (
        <Image {...props} alt={alt || product.name} />
      )}
      onButtonClick={handleValidation}
      onCardClick={() => {
        openModal()
        setOpenModal(product)
      }}
      product={product}
    />
  )
}
