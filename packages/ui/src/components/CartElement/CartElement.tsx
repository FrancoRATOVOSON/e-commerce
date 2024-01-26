import React, { memo, useState } from 'react'

import { Trash2Icon as TrashIcon } from 'lucide-react'
import { ProductCardInfos } from 'utils/types'

import { Button, Card, Price } from '..'
import Skeleton from '../../shadcn/skeleton'
import { cn } from '../../utils'

export interface CartElementProps {
  className?: string
  onQuantityChange?: (quantity: number) => void
  onRemove?: (id: string) => void
  product: ProductCardInfos
  quantity: number
}

export default function CartElement({
  className = '',
  onQuantityChange = () => {},
  onRemove = () => {},
  product,
  quantity: qtt
}: CartElementProps) {
  const [quantity, setQuantity] = useState<number>(qtt)

  return (
    <div
      className={`${className} flex flex-row justify-between items-stretch overflow-clip`}
    >
      <Card product={product} size="Small" />
      <div className="flex flex-col items-end justify-between w-32 text-right">
        <div className="flex flex-row items-center justify-end w-full gap-2">
          <input
            className={cn(
              'w-20 px-2 py-1 text-right bg-inherit text-inherit focus:outline-none',
              'border-b border-light-bd-base focus:border-light-bd-active',
              'dark:border-dark-bd-base dark:focus:border-dark-bd-active'
            )}
            defaultValue={quantity}
            min={1}
            onChange={e => {
              const parsedValue = e.target.valueAsNumber
              const value = Number.isNaN(parsedValue) ? 0 : parsedValue
              onQuantityChange && onQuantityChange(value)
              setQuantity(value)
            }}
            type="number"
          />
          <Button
            onClick={() => {
              onRemove && onRemove(product.productId)
            }}
            size="icon"
            variant="destructive"
          >
            <TrashIcon />
          </Button>
        </div>
        <p className="w-full">
          <Price
            currency={product.price.currency}
            value={product.price.value * quantity}
          />
        </p>
      </div>
    </div>
  )
}

export const CartElementSkeleton = memo(() => (
  <div className="flex flex-row items-stretch justify-between h-32 w-128">
    <div className="flex flex-row items-stretch justify-start h-full gap-4 w-fit">
      <div className="skeleton w-36" />
      <div className="flex flex-col items-start justify-between">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-24 h-4" />
      </div>
    </div>
    <div className="flex flex-col items-end justify-between w-full">
      <Skeleton className="w-3/4 h-6" />
      <Skeleton className="w-24 h-4" />
    </div>
  </div>
))
