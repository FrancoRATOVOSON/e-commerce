import React from 'react'
import ShoppingCard from './shoppingCard'
import { getProductList } from '@/lib'

export default async function CardList() {
  const productList = await getProductList()
  
  return (
    <div
    className={`flex flex-row flex-wrap gap-x-0 gap-y-10 justify-between pb-6 z-10`}>
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
