import React from 'react'
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
    <div className={`${className} w-72`} {...props}>
      <div className={`rounded-md overflow-clip relative`}>
        <img
        className={`w-full h-52`}
        src={image.src}
        alt={image.alt} />
        <div
        className={`
        absolute w-full h-full z-50 top-0 right-0 bottom-0 left-0 transition 
        group-hover/icard:bg-opacity-100 group-hover:bg-white-10
        `}/>
      </div>
      <div className={`flex flex-row justify-between pt-2 w-full`}>
        <p className={`font-medium`}>{name}</p>
        <p className={`font-light`}>
          <Price currency={price.currency} value={price.value} />
        </p>
      </div>
    </div>
  )
}
