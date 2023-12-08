'use client'

import React from 'react'
import { InteractiveCard } from 'ui'
import { ProductCardInfos } from 'utils/types'

interface ShoppingCardProps {
  product: ProductCardInfos
  className?: string
}

export default function ShoppingCard({
  className='',
  product
}:ShoppingCardProps) {
  return (
    <InteractiveCard
    className={className}
    actionLabel='Ajouter au panier'
    product={product}
    />
  )
}
