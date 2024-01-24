import React, { memo } from 'react'
import { ImageDetails, ProductPageInfos } from 'utils/types'
import Price from '../Price'
import TagChip from '../TagChip'
import TagsList from '../TagsList'

interface BigCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductPageInfos
}

export default function BigCard({
  className='',
  product,
  children
}:BigCardProps) {
  const {image: img, name, description, category, tags, price} = product
  const image:ImageDetails = typeof img === 'string' ? {src: img, alt: name} : img

  return (
    <div className={`${className} flex flex-row justify-start items-stretch w-fit gap-8`}>
      <div className={`w-128 h-128 rounded-md overflow-clip`}>
        <img
        className={`w-full h-full`}
        src={image.src}
        alt={image.alt}/>
      </div>
      <div className={`flex flex-col justify-between items-stretch gap-8 w-96`}>
        <div className={`flex flex-col`}>
          <h1 className={`font-semibold text-4xl`}>{name}</h1>
          <TagChip label={category} size='Normal' className='w-fit'/>
          <p className={`font-light text-lg`}>
            <Price value={price.value} currency={price.currency}/>
          </p>
          <p className={`text-base font-normal mt-4`}>{description}</p>
          {(tags && tags.length > 0) &&
          <TagsList tags={tags} tagsSize='Small' tagsType='None' />}
        </div>
        <div className={`h-full`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const BigCardSkeleton = memo(() => {
  return (
    <div className='flex flex-row items-stretch justify-between gap-8 h-128 w-fit'>
      <div className='h-full skeleton w-128'/>
      <div className='flex flex-col items-start justify-between h-full w-96'>
        <div className='flex flex-col items-start justify-start w-full gap-2 h-fit'>
          <div className='w-full h-10 skeleton'/>
          <div className='w-2/5 h-6 skeleton'/>
          <div className='w-3/5 h-6 skeleton'/>
          <div className='w-full h-32 skeleton'/>
          <div className='w-1/5 h-6 skeleton'/>
        </div>
        <div className='w-full h-10 skeleton'/>
      </div>
    </div>
  )
})
