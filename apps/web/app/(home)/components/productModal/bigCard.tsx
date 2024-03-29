import React from 'react'

import { getProductDetails } from '@/lib'
import { Button, BigCard as Card } from 'ui'
import { ProductCardInfos, ProductPageInfos } from 'utils/types'

interface ProductModalProps {
  onAddToCart: (id: string) => void
  onCloseAction: () => void
  product: ProductCardInfos
}

export default async function BigCard({
  onAddToCart,
  onCloseAction,
  product
}: ProductModalProps) {
  const detailedProduct: ProductPageInfos = await getProductDetails(product)

  return (
    <Card className="p-5" product={detailedProduct}>
      <div className="flex flex-row items-end justify-between w-full h-full gap-4">
        <Button
          className="w-full"
          onClick={() => onCloseAction()}
          variant="secondary"
        >
          Fermer
        </Button>
        <Button
          className="w-full"
          onClick={() => onAddToCart(product.productId)}
          variant="action"
        >
          Ajouter au panier
        </Button>
      </div>
    </Card>
  )
}
