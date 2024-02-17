import React from 'react'

import { getProductDetails } from '@/lib'
import Image from 'next/image'
import { Button, ProductCard } from 'ui/components'

interface ProductModalProps {
  id: string
  onAddToCart: (id: string) => void
  onCloseAction: () => void
}

export default async function BigCard({
  id,
  onAddToCart,
  onCloseAction
}: ProductModalProps) {
  const product = await getProductDetails(id)

  return (
    <ProductCard
      className="p-5"
      imageComponent={({ alt, ...props }) => (
        <Image {...props} alt={alt || product.name} />
      )}
      product={product}
      size="large"
    >
      <div className="flex flex-row items-end justify-between w-full h-full gap-4">
        <Button fullWidth onClick={onCloseAction} variant="secondary">
          Fermer
        </Button>
        <Button
          fullWidth
          onClick={() => onAddToCart(product.id)}
          variant="action"
        >
          Ajouter au panier
        </Button>
      </div>
    </ProductCard>
  )
}
