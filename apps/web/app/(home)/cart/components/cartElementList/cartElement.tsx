'use client'

import React from 'react'

import { handleServerAction, removeItemFromCart, setProductQty } from '@/lib'
import { useRouter } from 'next/navigation'
import { CartElement as CartElt } from 'ui/components'
import { CartElementProps } from 'ui/types'
import { useDebouncedCallback } from 'use-debounce'

import { useProductQuantitySetter } from '../../lib'

export default function CartElement({
  product,
  quantity,
  ...props
}: CartElementProps) {
  const router = useRouter()
  const { remove: removeProduct, set: setProductInfos } =
    useProductQuantitySetter()
  const { id } = product

  const handleRemove = () =>
    handleServerAction({
      onSuccess: () => {
        removeProduct(id)
        router.refresh()
      },
      serverAction: () => removeItemFromCart(id),
      success: {
        message: `Vous avez effacé ${product.name} de votre panier`,
        title: 'Effectué'
      }
    })

  const handleQuantityChange = useDebouncedCallback(
    (qty: number) =>
      handleServerAction({
        onSuccess: (newQty?: number) => {
          if (newQty) setProductInfos(id, newQty)
        },
        serverAction: () => setProductQty(id, qty),
        success: {
          message: `La quantité de ${product.name} est passé à ${qty}`,
          title: 'Effectué'
        }
      }),
    500
  )

  return (
    <CartElt
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
      product={product}
      quantity={quantity}
      {...props}
    />
  )
}
