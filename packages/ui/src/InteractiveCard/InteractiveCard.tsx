import React from 'react'
import { ProductCardInfos } from 'utils'
import Card from '../Card/Card'
import Button from '../Button'
import styles from './InteractiveCard.module.css'

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
    <div className={`${className} ${styles.card}`}>
      <button
      onClick={() => onClickAction && onClickAction(product.productId)}>
        <Card product={product}/>
      </button>
      <div>
        <Button
        type='Primary'
        className={`${styles.action}`}
        onClick={() => primaryAction && primaryAction(product.productId)}>
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}
