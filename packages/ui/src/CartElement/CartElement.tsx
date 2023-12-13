import React, { useRef, useState } from 'react'
import { ProductCardInfos } from 'utils'
import Card from '../Card'
import { TrashIcon } from '../Icons'
import Price from '../Price'

interface CartElementProps {
  className?: string
  product: ProductCardInfos
  quantity: number
  onRemove?: (id:string) => void
  onQuantityChange?: (quantity:number) => void
}

export default function CartElement({
  className='',
  product, quantity:qtt,
  onRemove=() => {}, onQuantityChange=() => {}
}:CartElementProps) {
  const [quantity, setQuantity] = useState<number>(qtt)
  const quantityInput = useRef<HTMLInputElement>(null)

  return (
    <div className={`${className} flex flex-row justify-between items-stretch overflow-clip`}>
      <Card product={product} size='Small'/>
      <div className='flex flex-col items-end justify-between w-32 text-right'>
        <div className='flex flex-row items-center justify-end w-full gap-2'>
          <input
          type='number'
          min={1}
          ref={quantityInput}
          defaultValue={quantity}
          className={`
          w-full px-0 py-1 ml-4 text-right bg-inherit text-inherit focus:outline-none 
          border-b border-light-bd-base focus:border-light-bd-active
          dark:border-dark-bd-base dark:focus:border-dark-bd-active
          `}
          onChange={(e) => {
            const parsedValue = Number.parseInt(e.target.value)
            const value = Number.isNaN(parsedValue) ? 0 : parsedValue
            onQuantityChange && onQuantityChange(value)
            setQuantity(value)
          }}/>
          <button onClick={() => {onRemove && onRemove(product.productId)}}>
            <TrashIcon className='hover:text-sld-base' size={24}/>
          </button>
        </div>
        <p className='w-full'>
          <Price
          value={product.price.value * quantity}
          currency={product.price.currency} />
        </p>
      </div>
    </div>
  )
}