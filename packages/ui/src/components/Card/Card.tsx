import React from 'react'

import { ImageDetails, ProductCardInfos } from 'utils/types'

import { TagChipSizeType } from '../../types'
import { cn } from '../../utils'
import Price from '../Price'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  product: ProductCardInfos
  size?: TagChipSizeType
}

const Card = React.memo(
  ({
    children,
    className = '',
    product,
    size = 'Normal',
    ...props
  }: CardProps) => {
    const { image: img, name, price } = product
    const image: ImageDetails =
      typeof img === 'string' ? { alt: name, src: img } : img

    return (
      <div
        className={cn(
          'flex',
          size === 'Normal' && 'w-72 flex-col',
          size !== 'Normal' && 'h-32 flex-row gap-4 w-96',
          className
        )}
        {...props}
      >
        <div className={`rounded-md overflow-clip relative`}>
          {children || (
            <img
              alt={image.alt}
              className={size === 'Normal' ? 'w-full h-52' : 'h-32'}
              src={image.src}
            />
          )}
          <div
            className={cn(
              'absolute w-full h-full top-0 right-0 bottom-0 left-0 transition',
              'group-hover/icard:bg-opacity-100 group-hover/icard:bg-white-10'
            )}
          />
        </div>
        <div
          className={cn(
            'flex justify-between flex-col items-start',
            size === 'Normal' && 'pt-2 w-full'
          )}
        >
          <div>
            <p className={`font-medium`}>{name}</p>
          </div>
          <p className={`font-light`}>
            <Price currency={price.currency} value={price.value} />
          </p>
        </div>
      </div>
    )
  }
)

export default Card
