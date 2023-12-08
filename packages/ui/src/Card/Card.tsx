import React from 'react'
import Button from '../Button'
import styles from './Card.module.css'
import Price from '../Price'
import { ImageDetails, ProductCardInfos } from 'utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductCardInfos
}

export default function Card({
  product, className='', ...props
}:CardProps) {
  const {name, price, image: img} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: name} : img

  return (
    <div className={`${className} ${styles.card}`} {...props}>
      <div className={`${styles.card_top}`}>
        <img
        className={`${styles.card_img}`}
        src={image.src}
        alt={image.alt} />
        <div className={styles.card_top_filter}/>
      </div>
      <div className={`${styles.card_bottom}`}>
        <p className={`${styles.name}`}>{name}</p>
        <p className={`${styles.price}`}>
          <Price currency={price.currency} value={price.value} />
        </p>
      </div>
    </div>
  )
}
