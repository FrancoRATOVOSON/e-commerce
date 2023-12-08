import React from 'react'
import { ImageDetails, ProductPageInfos } from 'utils'
import Price from '../Price'

import styles from './BigCard.module.css'

interface BigCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductPageInfos
}

export default function BigCard({
  className='',
  product,
  children
}:BigCardProps) {
  const {image: img, name, description, price} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: name} : img

  return (
    <div className={`${className} ${styles.card}`}>
      <div className={styles.card_left}>
        <img
        className={styles.card_img}
        src={image.src}
        alt={image.alt}/>
      </div>
      <div className={styles.card_right}>
        <div className={styles.card_infos}>
          <h1 className={styles.card_title}>{name}</h1>
          <p className={styles.card_price}>
            <Price value={price.value} currency={price.currency}/>
          </p>
          <p className={styles.card_desc}>{description}</p>
        </div>
        <div className={styles.card_action}>
          {children}
        </div>
      </div>
    </div>
  )
}
