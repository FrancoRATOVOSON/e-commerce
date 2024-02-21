import * as React from 'react'

import { DataTable as Table } from 'ui/components'
import { cn } from 'ui/utils'

import { useFetchShopperData } from '../_hooks'
import {
  amountPerOrder,
  details,
  isOrdering,
  itemsTotalPruchased,
  lastCommandDate,
  login,
  productTotalPurchased,
  totalAmount,
  validatedOrders,
  waitingOrders
} from './column'

interface DataTableProps {
  className?: string
}

function DataTable({ className }: DataTableProps) {
  const data = useFetchShopperData()

  return (
    <Table
      className={cn(className)}
      columns={[
        details,
        login,
        isOrdering,
        waitingOrders,
        validatedOrders,
        amountPerOrder,
        totalAmount,
        productTotalPurchased,
        itemsTotalPruchased,
        lastCommandDate
      ]}
      data={data}
      pagination
      search
      searchColumn="login"
      sorting
      visibility
    />
  )
}

export default DataTable
