'use client'

import React from 'react'
import { Button, Card } from 'ui'
import { ProductCardInfos } from 'utils'

interface ShoppingCardProps {
  product: ProductCardInfos
  className?: string
}

export default function ShoppingCard({
  className='',
  product
}:ShoppingCardProps) {
  return (
    <div className={`${className}`}>
      <button>
        <Card product={product}/>
      </button>
      <div>
        <Button
        type='Primary'
        className={``}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}
