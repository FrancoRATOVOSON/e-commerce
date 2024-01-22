import React from 'react'
import ShoppingCard from './shoppingCard'
import { getProductList } from '@/lib'

interface CardListProps {
  category?: string | string[]
  tag?: string | string[]
}

export default async function CardList({category, tag}:CardListProps) {
  const tagParams:string|string[]|undefined = typeof tag === 'string' ? tag.split(' ')[1] :
    tag?.map(tg => tg.split(' ')[1])

  const productList = await getProductList(!category ? undefined : {category, tag: tagParams})
  
  return (
    <div
    className={`flex flex-row flex-wrap gap-x-0 gap-y-10 justify-between pb-6 z-10 w-full`}>
      {
        productList.map(product => (
          <ShoppingCard
          key={product.productId}
          product={product}
          className='z-10'/>
        ))
      }
    </div>
  )
}
