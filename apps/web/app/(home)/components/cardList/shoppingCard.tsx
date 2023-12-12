'use client'

import React, { useRef } from 'react'
import { InteractiveCard } from 'ui'
import { ProductCardInfos } from 'utils/types'
import { getProductPageInfosFrom } from 'utils/faker'
import ProductModal from './productModal'

interface ShoppingCardProps {
  product: ProductCardInfos
  className?: string
}

export default function ShoppingCard({
  className='',
  product
}:ShoppingCardProps) {
  const modal = useRef<HTMLDialogElement>(null)

  return (
    <>
      <InteractiveCard
      className={className}
      actionLabel='Ajouter au panier'
      product={product}
      onClickAction={() => modal.current?.showModal()}
      />
      <ProductModal product={getProductPageInfosFrom(product)} modalRef={modal}/>
    </>
  )
}
