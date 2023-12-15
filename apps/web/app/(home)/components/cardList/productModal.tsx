'use client'

import React, { Suspense } from 'react'
import { BigCardSkeleton, Modal } from 'ui'
import { ProductCardInfos } from 'utils'
import BigCard from './bigCard'

interface ProductModalProps {
  product: ProductCardInfos
  modalRef: React.RefObject<HTMLDialogElement>
  onClose?: () => void
}

export default function ProductModal({product, modalRef, onClose}:ProductModalProps) {
  return (
    <Modal ref={modalRef} onModalClose={onClose}>
      <Suspense fallback={<BigCardSkeleton/>}>
        <BigCard product={product} modalRef={modalRef} />
      </Suspense>
    </Modal>
  )
}
