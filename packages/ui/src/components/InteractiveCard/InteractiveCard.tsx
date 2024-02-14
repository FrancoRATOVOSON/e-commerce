import React, { memo } from 'react'

import { ProductCardInfos } from 'utils/types'

import { Button, Card } from '..'

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  actionLabel: string
  children?: React.ReactNode
  onClickAction?: (id: string) => void
  primaryAction?: (id: string) => void
  product: ProductCardInfos
}

export default function InteractiveCard({
  actionLabel,
  children,
  className = '',
  onClickAction,
  primaryAction,
  product
}: InteractiveCardProps) {
  return (
    <div className={`${className} flex flex-col gap-2 group/icard`}>
      <button onClick={() => onClickAction && onClickAction(product.productId)}>
        <Card product={product}>{children}</Card>
      </button>
      <div>
        <Button
          className={`w-full`}
          onClick={() => primaryAction && primaryAction(product.productId)}
          variant="action"
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}

export const InteractiveCardSkeleton = memo(() => (
  <div className="flex flex-col items-start justify-between w-72 h-[312px]">
    <div className={`w-full h-52 skeleton`} />
    <div className={`w-2/3 h-6 skeleton`} />
    <div className={`w-1/2 h-4 skeleton`} />
    <div className={`w-full h-10 skeleton`} />
  </div>
))
