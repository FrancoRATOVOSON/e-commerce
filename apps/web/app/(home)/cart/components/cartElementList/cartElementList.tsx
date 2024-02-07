'use client'

import * as React from 'react'

import { getUserCart } from '@/lib'
import { cn } from 'ui/utils'
import { ProductCardInfos, ServerActionReturnType } from 'utils/types'

import { useProductList } from '../../lib'
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

export default function CartElementList({
  className = ''
}: CartElementListProps) {
  const { productList, setProductList } = useProductList()
  const [result, setResult] = React.useState<
    ServerActionReturnType<ProductCardInfos[]> | undefined
  >()

  React.useEffect(() => {
    getUserCart().then(userCart => setResult(userCart))
  }, [])

  React.useEffect(() => {
    if (result?.payload) setProductList(result.payload)
  }, [result, setProductList])

  if (!result)
    return (
      <ErrorState>
        <p className="text-muted-foreground">Chargement de votre panier</p>
      </ErrorState>
    )

  if (result.state === 'error')
    return (
      <ErrorState>
        <p className="text-destructive">{result.message}</p>
      </ErrorState>
    )

  if (productList.length === 0)
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
      {productList.map(({ quantity, ...product }) => (
        <CartElement
          key={product.productId}
          product={product}
          quantity={quantity || 1}
        />
      ))}
    </div>
  )
}
