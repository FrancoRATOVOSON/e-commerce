import React, { memo } from 'react'
import Price from '../Price'
import { ImageDetails, ProductCardInfos } from 'utils'
import { TagChipSizeType } from '../types'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductCardInfos
  size?: TagChipSizeType
}

const Card = memo(function({
  product, className='', size='Normal', ...props
}:CardProps) {
  const {name, price, image: img} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: name} : img

  return (
    <div className={`${className} flex
    ${size === 'Normal' ? 'w-72 flex-col' : 'h-32 flex-row gap-4 w-96'}`}
    {...props}>
      <div className={`rounded-md overflow-clip relative`}>
        <img
        className={`${size === 'Normal' ? 'w-full h-52' : 'h-32'}`}
        src={image.src}
        alt={image.alt} />
        <div
        className={`
        absolute w-full h-full z-50 top-0 right-0 bottom-0 left-0 transition 
        group-hover/icard:bg-opacity-100 group-hover/icard:bg-white-10
        `}/>
      </div>
      <div className={`flex justify-between flex-col items-start
      ${size === 'Normal' ? 'pt-2 w-full' : ''}`}>
        <p className={`font-medium`}>{name}</p>
        <p className={`font-light`}>
          <Price currency={price.currency} value={price.value} />
        </p>
      </div>
    </div>
  )
})

export default Card