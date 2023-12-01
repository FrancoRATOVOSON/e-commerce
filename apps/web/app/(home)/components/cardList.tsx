import React from 'react'
import { getProductList } from '../../lib'
import { Card } from 'ui'

export default function CardList() {
  const productList = getProductList()
  
  return (
    <div
    className={`flex flex-row flex-wrap gap-10`}>
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
