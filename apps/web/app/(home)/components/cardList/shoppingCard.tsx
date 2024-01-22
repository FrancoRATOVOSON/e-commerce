'use client'

import React from 'react'
import { InteractiveCard } from 'ui'
import { ProductCardInfos } from 'utils/types'
import { useOpenProductModal } from '@/stores'

interface ShoppingCardProps {
  product: ProductCardInfos
  className?: string
}

export default function ShoppingCard({
  className='',
  product
}:ShoppingCardProps) {
  const { modalRef, openModal } = useOpenProductModal()

  return (
    <InteractiveCard
    className={className}
    actionLabel='Ajouter au panier'
    product={product}
    onClickAction={() => openModal(product, () => modalRef.current?.show())}
    />
  )
}
