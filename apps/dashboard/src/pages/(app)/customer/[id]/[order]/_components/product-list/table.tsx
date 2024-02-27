import React from 'react'

import { ProductOrder } from 'database/types'
import { DataTable } from 'ui/components'
import { cn } from 'ui/utils'

import { amount, category, discount, name, price, quantity } from './column'

interface TableProps {
  className?: string
  products: Array<ProductOrder>
}

export default function Table({ className, products }: TableProps) {
  return (
    <DataTable
      className={cn(className)}
      columns={[name, category, price, discount, quantity, amount]}
      data={products}
      filtering
      pagination
      search
      searchColumn="name"
      sorting
      visibility
    />
  )
}
