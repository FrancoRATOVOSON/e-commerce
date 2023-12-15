import React from 'react'
import { generateRandom } from 'utils/faker'
import CartElement from './cartElement'
import { getProductList } from '@/lib'

interface CartElementListProps {
  className?: string
}

export default async function CartElementList({
  className='',
}:CartElementListProps) {
  const productList = await getProductList(5)

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
