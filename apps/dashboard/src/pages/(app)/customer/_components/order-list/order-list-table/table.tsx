import React from 'react'

import { useCurrentShopperDetails } from '@customer/_hooks'
import { OrderOverview } from '@customer/_lib'
import { DataTable } from 'ui/components'
import { cn } from 'ui/utils'
import { OrderStatusType } from 'utils/types'

import {
  amount,
  deliveredAt,
  id,
  itemCount,
  productCount,
  validatedAt
} from './column'

interface OrderListTableProps {
  className?: string
  details: Array<OrderOverview>
}

export default function OrderListTable({
  className,
  details
}: OrderListTableProps) {
  const { filter } = useCurrentShopperDetails()

  return (
    <DataTable
      className={cn(className)}
      columns={[
        id,
        validatedAt,
        productCount,
        itemCount,
        amount,
        ...(filter === OrderStatusType.VALIDATED ? [] : [deliveredAt])
      ]}
      data={details}
      pagination
      search
      searchColumn="id"
      sorting
    />
  )
}
