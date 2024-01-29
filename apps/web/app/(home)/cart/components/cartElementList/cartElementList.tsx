import React from 'react'

import { getProductList } from '@/lib'
import { cn } from 'ui/utils'
import { generateRandom } from 'utils/faker'

import CartElement from './cartElement'

interface CartElementListProps {
  className?: string
}

export default async function CartElementList({
  className = ''
}: CartElementListProps) {
  const productList = await getProductList()

  return (
    <div
      className={cn(
        'flex flex-col justify-start items-center gap-8',
        className
      )}
    >
      {productList.map(() => null)}
    </div>
  )
}
