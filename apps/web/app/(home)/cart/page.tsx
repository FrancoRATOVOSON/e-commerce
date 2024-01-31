import React from 'react'

import { Metadata } from 'next'

import { CartFooter, CartList } from './components'

export const metadata: Metadata = {
  description: 'Votre panier',
  title: 'YShop - Panier'
}

export default function Cart() {
  return (
    <div className="mb-36">
      <CartList />
      <CartFooter />
    </div>
  )
}
