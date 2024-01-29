'use client'

import React from 'react'

import { CartElement as CartElt } from 'ui'
import { CartElementProps } from 'ui/types'

export default function CartElement(props: CartElementProps) {
  return <CartElt {...props} />
}
