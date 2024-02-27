import React from 'react'

import { OrderOverview } from '@customer/_lib'
import {
  DataTableHeader,
  DataTableNumberCell,
  DataTablePriceCell,
  DataTableTextCell,
  Indicator
} from 'ui/components'
import { cn } from 'ui/utils'
import { compareAsc, format } from 'utils'
import { ColumnDef } from 'utils/hooks'
import { OrderStatusType } from 'utils/types'

import { useCurrentShopperDetails } from '../../../_hooks'

type OrderTableColumn = ColumnDef<OrderOverview>

const id: OrderTableColumn = {
  accessorKey: 'id',
  cell: ({ row }) => (
    <DataTableNumberCell
      className="text-left font-medium"
      value={row.original.id}
    />
  ),
  enableSorting: false,
  header: ({ column }) => (
    <DataTableHeader
      className="text-center"
      column={column}
      title="Numéro de commande"
    />
  )
}

const validatedAt: OrderTableColumn = {
  accessorKey: 'validatedAt',
  cell: ({ row }) => {
    const { validatedAt: orderedAt } = row.original
    return (
      <DataTableTextCell className="text-center">
        {orderedAt && format(orderedAt, 'dd/MM/yyyy')}
      </DataTableTextCell>
    )
  },
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Commandé le" />
  )
}

const productCount: OrderTableColumn = {
  accessorKey: 'productCount',
  cell: ({ row }) => (
    <DataTableNumberCell
      className="text-center"
      value={row.original.productCount}
    />
  ),
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Nombre de produit" />
  )
}

const itemCount: OrderTableColumn = {
  accessorKey: 'itemCount',
  cell: ({ row }) => {
    const { filter } = useCurrentShopperDetails()

    return (
      <DataTableNumberCell
        className={cn(filter === OrderStatusType.VALIDATED && 'text-right')}
        value={row.original.itemCount}
      />
    )
  },
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title={`Nombre d'article`} />
  )
}

const amount: OrderTableColumn = {
  accessorKey: 'amount',
  cell: ({ row }) => <DataTablePriceCell value={row.original.amount} />,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Montant total" />
  )
}

const deliveredAt: OrderTableColumn = {
  accessorKey: 'deliveredAt',
  cell: ({ row }) => {
    const { deliveredAt: date } = row.original

    if (date)
      return (
        <DataTableTextCell className="text-right">
          {format(date, 'dd/MM/yyyy')}
        </DataTableTextCell>
      )
    return (
      <div className="flex justify-center items-center">
        <Indicator state={'error'} />
      </div>
    )
  },
  enableSorting: true,
  header: ({ column }) => <DataTableHeader column={column} title="Livré le" />,
  sortingFn: (prevRow, nextRow) => {
    const { deliveredAt: dateA } = prevRow.original
    const { deliveredAt: dateB } = nextRow.original

    if (!dateB) return -1
    if (!dateA) return 0

    return compareAsc(dateA, dateB)
  }
}

export { amount, deliveredAt, id, itemCount, productCount, validatedAt }
