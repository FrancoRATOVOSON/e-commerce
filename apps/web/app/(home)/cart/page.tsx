import React from 'react'
import { CartFooter, CartList } from './components'

export default function Cart() {
  return (
    <div className='mb-36'>
      <CartList/>
      <CartFooter/>
    </div>
  )
}
