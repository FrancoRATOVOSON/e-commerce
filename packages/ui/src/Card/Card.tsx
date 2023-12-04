'use client'

import React from 'react'
import Button from '../Button'
import styles from './Card.module.css'
import Price from '../Price'

interface ImageDetails {
  src: string
  alt: string
}

interface Product {
  productId: string
  title: string
  price: {
    value: number
    currency: string
  }
  image: ImageDetails | string
}

type OnClickAction = (id:string) => void

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  addToCartAction: OnClickAction
  seeDetailsAction: OnClickAction
}

export default function Card({
  product, addToCartAction, seeDetailsAction, className, ...props
}:CardProps) {
  const {productId ,title, price, image: img} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: title} : img

  return (
    <div className={`${className ?? ''} ${styles.card}`} {...props}>
      <div className={`${styles.card_top}`}>
        <img
        className={`${styles['pos-absolute']}`}
        src={image.src}
        alt={image.alt} />
        <div className={`${styles['pos-absolute']} ${styles.card_top_details}`}>
          <Button
          type='Glass'
          onClick={() => seeDetailsAction(productId)}
          className={`${styles.details_button}`}>
            Détails
          </Button>
        </div>
      </div>
      <div className={`${styles.card_bottom}`}>
        <div className={`${styles.card_bottom_details}`}>
          <p className={`${styles.title}`}>{title}</p>
          <p className={`${styles.price}`}>
            <Price currency={price.currency} value={price.value} />
          </p>
        </div>
        <Button
        type='Primary'
        className={`${styles.cart_button}`}
        onClick={() => addToCartAction(productId)}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}
