import React from 'react'
import { getProductList } from '../../lib'
import { Card } from 'ui'

export default function CardList() {
  const productList = getProductList(10)
  
  return (
    <div
    className={`flex flex-row flex-wrap gap-x-0 gap-y-10 justify-between pb-6`}>
      {
        productList.map(product => (
          <Card
          key={product.productId}
          product={product}
          addToCartAction={async() => {'use server'}}
          seeDetailsAction={async () => {'use server'}}/>
        ))
      }
    </div>
  )
}
