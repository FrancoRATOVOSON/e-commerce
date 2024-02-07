import React from 'react'

import { getProductList } from '@/lib'
import { stringToInt } from 'utils'

import ShoppingCard from './shoppingCard'

interface CardListProps {
  category?: string | string[]
  tag?: string | string[]
  discount: {
    max?: string
    min?: string
  }
  price: {
    max?: string
    min?: string
  }
}

export default async function CardList({
  category,
  discount,
  price,
  tag
}: CardListProps) {
  const tagParams: string | string[] | undefined =
    typeof tag === 'string'
      ? tag.split(' ')[1]
      : tag?.map(tg => tg.split(' ')[1])

  const categoryParams = !category
    ? { category: [] }
    : {
        category,
        tag: tagParams
      }

  const productList = await getProductList({
    discount: {
      max: stringToInt(discount.max),
      min: stringToInt(discount.min)
    },
    price: { max: stringToInt(price.max), min: stringToInt(price.min) },
    ...categoryParams
  })

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
