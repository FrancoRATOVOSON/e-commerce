'use client'

import React, { Suspense } from 'react'
import { BigCardSkeleton, Modal } from 'ui'
import { ProductCardInfos } from 'utils/types'
import BigCard from './bigCard'
import { useProductModal } from '@/stores'

interface ProductModalProps {
  product?: ProductCardInfos
  modalRef?: React.RefObject<HTMLDialogElement>
  onClose?: () => void
}

export default function ProductModal({ onClose}:ProductModalProps) {
  const { product, closeModal, modalRef, isOpen } = useProductModal()

  return (
    <Modal ref={modalRef} className='z-50 fixed top-0 right-0 bottom-0 left-0' onModalClose={() => {
      closeModal(() => { onClose && onClose() })
    }}>
      {
        isOpen &&
        <Suspense fallback={<BigCardSkeleton/>}>
          <BigCard product={product} modalRef={modalRef} />
        </Suspense>
      }
    </Modal>
  )
}
