import React from 'react'
import { generateRandom, getProductList } from 'utils/faker'
import CartElement from './cartElement'

interface CartElementListProps {
  className?: string
}

export default function CartElementList({
  className='',
}:CartElementListProps) {
  const productList = getProductList(5)

  return (
    <div className={`
    ${className} 
    flex flex-col justify-start items-center gap-8
    `}>
      {
        productList.map(product => (
          <CartElement
          key={product.productId}
          product={product}
          quantity={generateRandom(1,5)}
          className='w-fit'/>
        ))
      }
    </div>
  )
}
