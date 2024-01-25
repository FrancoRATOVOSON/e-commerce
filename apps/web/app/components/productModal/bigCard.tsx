import React from 'react'

import { getProductDetails } from '@/lib'
import { Button, BigCard as Card } from 'ui'
import { ProductCardInfos, ProductPageInfos } from 'utils/types'

interface ProductModalProps {
  modalRef: React.RefObject<HTMLDialogElement>
  product: ProductCardInfos
}

export default async function BigCard({
  modalRef,
  product
}: ProductModalProps) {
  const detailedProduct: ProductPageInfos = await getProductDetails(product)

  return (
    <Card product={detailedProduct}>
      <div className="flex flex-row items-end justify-between w-full h-full gap-4">
        <Button
          className="w-full"
          onClick={() => modalRef.current?.close()}
          variant="secondary"
        >
          Fermer
        </Button>
        <Button className="w-full" variant="primary">
          Ajouter au panier
        </Button>
      </div>
    </Card>
  )
}
