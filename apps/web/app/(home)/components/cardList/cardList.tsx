import React from 'react'

import { getProductList } from '@/lib'

import ShoppingCard from './shoppingCard'

interface CardListProps {
  category?: string | string[]
  tag?: string | string[]
}

export default async function CardList({ category, tag }: CardListProps) {
  const tagParams: string | string[] | undefined =
    typeof tag === 'string'
      ? tag.split(' ')[1]
      : tag?.map(tg => tg.split(' ')[1])

  const productList = await getProductList(
    !category ? undefined : { category, tag: tagParams }
  )

  return (
    <div
      className={`flex flex-row flex-wrap gap-x-9 gap-y-9 justify-start pb-6 w-full`}
    >
      {productList.map(product => (
        <ShoppingCard className="" key={product.productId} product={product} />
      ))}
    </div>
  )
}
