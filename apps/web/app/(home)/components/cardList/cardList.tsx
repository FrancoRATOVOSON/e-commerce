import React from 'react'
import { getProductList } from 'utils/faker'
import ShoppingCard from './shoppingCard'

export default function CardList() {
  const productList = getProductList(10)
  
  return (
    <div
    className={`flex flex-row flex-wrap gap-x-0 gap-y-10 justify-between pb-6`}>
      {
        productList.map(product => (
          <ShoppingCard
          key={product.productId}
          product={product}/>
        ))
      }
    </div>
  )
}
