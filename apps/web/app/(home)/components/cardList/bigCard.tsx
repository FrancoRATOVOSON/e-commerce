import React from 'react'
import { Button, BigCard as Card } from 'ui'
import { ProductCardInfos, ProductPageInfos } from 'utils'
import { getProductDetails } from '@/lib'

interface ProductModalProps {
  product: ProductCardInfos
  modalRef: React.RefObject<HTMLDialogElement>
}

export default async function BigCard({product, modalRef}:ProductModalProps) {
  const detailedProduct:ProductPageInfos = await getProductDetails(product)
  
  return (
    <Card product={detailedProduct}>
      <div className='flex flex-row items-end justify-between w-full h-full gap-4'>
        <Button
        type='Secondary'
        className='w-full'
        onClick={() => modalRef.current?.close()}>Fermer</Button>
        <Button
        className='w-full'
        type='Primary'>Ajouter au panier</Button>
      </div>
    </Card>
  )
}
