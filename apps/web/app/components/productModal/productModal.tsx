'use client'

import React, { Suspense } from 'react'

import { useProductModal } from '@/stores'
import { BigCardSkeleton, Modal } from 'ui'
import { ProductCardInfos } from 'utils/types'

import BigCard from './bigCard'

interface ProductModalProps {
  modalRef?: React.RefObject<HTMLDialogElement>
  onClose?: () => void
  product?: ProductCardInfos
}

export default function ProductModal({ onClose }: ProductModalProps) {
  const { closeModal, isOpen, modalRef, product } = useProductModal()

  return (
    <Modal
      onModalClose={() => {
        closeModal(() => {
          onClose && onClose()
        })
      }}
      ref={modalRef}
    >
      {isOpen && (
        <Suspense fallback={<BigCardSkeleton />}>
          <BigCard modalRef={modalRef} product={product} />
        </Suspense>
      )}
    </Modal>
  )
}
