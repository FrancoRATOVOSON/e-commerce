import React, { memo } from 'react'
import { ProductCardInfos } from 'utils/types'
import Card from '../Card/Card'
import Button from '../Button'

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductCardInfos
  actionLabel: string
  primaryAction?: (id:string) => void
  onClickAction?: (id:string) => void
}

export default function InteractiveCard({
  product,
  primaryAction,
  onClickAction,
  actionLabel,
  className=''
}:InteractiveCardProps) {
  return (
    <div className={`${className} flex flex-col gap-2 group/icard`}>
      <button
      onClick={() => onClickAction && onClickAction(product.productId)}>
        <Card product={product}/>
      </button>
      <div>
        <Button
        variant='Primary'
        className={`w-full`}
        onClick={() => primaryAction && primaryAction(product.productId)}>
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}

export const InteractiveCardSkeleton = memo(() => {

  return (
    <div className='flex flex-col items-start justify-between w-72 h-[312px]'>
      <div className={`w-full h-52 skeleton`}/>
      <div className={`w-2/3 h-6 skeleton`}/>
      <div className={`w-1/2 h-4 skeleton`}/>
      <div  className={`w-full h-10 skeleton`}/>
    </div>
  )
})
