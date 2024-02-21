import * as React from 'react'

import { getAnArrayOf, getRandomElementOf } from 'utils'
import { faker } from 'utils/faker'
import { ColumnDef } from 'utils/hooks'

import { DataTable, DataTableHeader } from '../components'

type PaymentStatus = 'failed' | 'pending' | 'processing' | 'success'
const paymentStatus: PaymentStatus[] = [
  'failed',
  'pending',
  'processing',
  'success'
]

type Payment = {
  amount: number
  email: string
  id: string
  status: PaymentStatus
}

function fakePayment(): Payment {
  return {
    amount: faker.number.int({ max: 500, min: 10 }),
    email: faker.internet.email(),
    id: faker.string.uuid(),
    status: getRandomElementOf(paymentStatus)
  }
}

const payments: (amount?: number) => Payment[] = (amount?: number) =>
  getAnArrayOf(fakePayment, amount || faker.number.int({ max: 42, min: 5 }))

const columns: (_: {
  sorting?: boolean
  visibility?: boolean
}) => ColumnDef<Payment>[] = ({ sorting = false, visibility = false }) => [
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency'
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
    header: ({ column }) => (
      <DataTableHeader
        className="text-right flex flex-row justify-end"
        column={column}
        labels={{ asc: 'Croissant', desc: 'Décroissant', hide: 'Masquer' }}
        sorting={sorting}
        title="Amount"
        visibility={visibility}
      />
    )
  },
  {
    cell: ({ row }) => {
      const payment = row.original

      return <div className="text-sm text-right">{payment.id}</div>
    },
    header: () => <div className="text-right" />,
    id: 'actions'
  }
]

function DataTableContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full m-8 justify-self-start self-stretch grow">
      {children}
    </div>
  )
}

export default {
  Base: (
    <DataTableContainer>
      <DataTable columns={columns({})} data={payments(10)} />
    </DataTableContainer>
  ),
  Pagination: (
    <DataTableContainer>
      <DataTable columns={columns({})} data={payments()} pagination />
    </DataTableContainer>
  ),
  Search: (
    <DataTableContainer>
      <DataTable
        columns={columns({ sorting: true, visibility: true })}
        data={payments(10)}
        search={true}
        searchColumn="email"
      />
    </DataTableContainer>
  ),
  Sort: (
    <DataTableContainer>
      <DataTable
        columns={columns({ sorting: true })}
        data={payments(10)}
        sorting
      />
    </DataTableContainer>
  ),
  Visibility: (
    <DataTableContainer>
      <DataTable
        columns={columns({ sorting: true, visibility: true })}
        data={payments(10)}
        visibility
      />
    </DataTableContainer>
  )
}
