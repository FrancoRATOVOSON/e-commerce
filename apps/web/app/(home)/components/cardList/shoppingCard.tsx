'use client'

import React, { Suspense, useRef } from 'react'
import { InteractiveCard } from 'ui'
import { ProductCardInfos } from 'utils/types'
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
      <Suspense>
        <ProductModal product={product} modalRef={modal}/>
      </Suspense>
    </>
  )
}
