import React from 'react'
import Button from '../Button'
import styles from './Card.module.css'

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

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  addToCartAction: (id:string) => void
  seeDetailsAction: (id:string) => void
}

export default function Card({
  product, addToCartAction, seeDetailsAction, className, ...props
}:CardProps) {
  const {productId ,title, price, image: img} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: title} : img

  return (
    <div className={`${className} ${styles.card}`} {...props}>
      <div className='relative w-full h-52'>
        <img
        className={`${styles.pos_absolute}`}
        src={image.src}
        alt={image.alt} />
        <div className={`${styles.pos_absolute} ${styles.details} flex p-4 items-end justify-center`}>
          <Button
          type='Glass'
          onClick={() => seeDetailsAction(productId)}
          className='w-full'>
            Détails
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-2 pt-2'>
        <div className='flex flex-row justify-between'>
          <p className='font-semibold'>{title}</p>
          <p className='font-light'>
            {new Intl.NumberFormat('fr-FR', {style: 'currency', currency: price.currency}).format(price.value)}
          </p>
        </div>
        <Button
        type='Primary'
        className='bg-ctas'
        onClick={() => addToCartAction(productId)}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}
