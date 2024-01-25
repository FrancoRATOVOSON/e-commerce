import React, { memo } from 'react'

import { ImageDetails, ProductPageInfos } from 'utils/types'

import { Price, TagChip, TagsList } from '..'
import Skeleton from '../shadcn/skeleton'

interface BigCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ProductPageInfos
}

export default function BigCard({
  children,
  className = '',
  product
}: BigCardProps) {
  const { category, description, image: img, name, price, tags } = product
  const image: ImageDetails =
    typeof img === 'string' ? { alt: name, src: img } : img

  return (
    <div
      className={`${className} flex flex-row justify-start items-stretch w-fit gap-8`}
    >
      <div className={`w-128 h-128 rounded-md overflow-clip`}>
        <img alt={image.alt} className={`w-full h-full`} src={image.src} />
      </div>
      <div className={`flex flex-col justify-between items-stretch gap-8 w-96`}>
        <div className={`flex flex-col`}>
          <h1 className={`font-semibold text-4xl`}>{name}</h1>
          <TagChip className="w-fit" label={category} size="Normal" />
          <p className={`font-light text-lg`}>
            <Price currency={price.currency} value={price.value} />
          </p>
          <p className={`text-base font-normal mt-4`}>{description}</p>
          {tags && tags.length > 0 && (
            <TagsList tags={tags} tagsSize="Small" tagsType="None" />
          )}
        </div>
        <div className={`h-full`}>{children}</div>
      </div>
    </div>
  )
}

export const BigCardSkeleton = memo(() => (
  <div className="flex flex-row items-stretch justify-between gap-8 h-128 w-fit">
    <Skeleton className="h-full w-128" />
    <div className="flex flex-col items-start justify-between h-full w-96">
      <div className="flex flex-col items-start justify-start w-full gap-2 h-fit">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-2/5 h-6" />
        <Skeleton className="w-3/5 h-6" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-1/5 h-6" />
      </div>
      <Skeleton className="w-full h-10" />
    </div>
  </div>
))
