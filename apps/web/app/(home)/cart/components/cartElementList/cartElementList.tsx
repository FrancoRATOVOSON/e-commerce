import React from 'react'

import { getUserCart } from '@/lib'
import { cn } from 'ui/utils'

import CartElement from './cartElement'

interface CartElementListProps {
  className?: string
}

function ErrorState({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default async function CartElementList({
  className = ''
}: CartElementListProps) {
  const result = await getUserCart()

  if (result.state === 'error')
    return (
      <ErrorState>
        <p className="text-destructive-foreground">{result.message}</p>
      </ErrorState>
    )

  const products = result.payload
  if (!products || products.length === 0)
    return (
      <ErrorState>
        <p className="text-muted-foreground">Votre panier est encore vide</p>
      </ErrorState>
    )

  return (
    <div
      className={cn(
        'flex flex-col justify-start items-center gap-8',
        className
      )}
    >
      {products.map(({ quantity, ...product }) => (
        <CartElement
          key={product.productId}
          product={product}
          quantity={quantity || 1}
        />
      ))}
    </div>
  )
}
