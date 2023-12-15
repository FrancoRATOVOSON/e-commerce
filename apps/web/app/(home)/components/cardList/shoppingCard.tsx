'use client'

import React, { useEffect, useRef, useState } from 'react'
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
  const [isOpen, setOpen] = useState(false)
  const productModalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if(isOpen) productModalRef.current?.showModal()
  },[isOpen,product])

  return (
    <>
      <InteractiveCard
      className={className}
      actionLabel='Ajouter au panier'
      product={product}
      onClickAction={() => setOpen(true)}
      />
      {
        isOpen && (
          <ProductModal
          modalRef={productModalRef}
          product={product}
          onClose={() => setOpen(false)}/>
        )
      }
    </>
  )
}
