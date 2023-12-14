import React from 'react'
import { ImageDetails, ProductPageInfos } from 'utils'
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
