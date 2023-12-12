import React from 'react'
import { BigCard, Button, Modal } from 'ui'
import { ProductPageInfos } from 'utils'

interface ProductModalProps {
  product: ProductPageInfos
  modalRef: React.RefObject<HTMLDialogElement>
}

export default function ProductModal({product, modalRef}:ProductModalProps) {
  return (
    <Modal ref={modalRef}>
      <BigCard product={product}>
        <div className='flex flex-row items-end justify-between w-full h-full gap-4'>
          <Button
          type='Secondary'
          className='w-full'
          onClick={() => modalRef.current?.close()}>Fermer</Button>
          <Button
          className='w-full'
          type='Primary'>Ajouter au panier</Button>
        </div>
      </BigCard>
    </Modal>
  )
}
