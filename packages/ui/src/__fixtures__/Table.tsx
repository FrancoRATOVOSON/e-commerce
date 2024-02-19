import { getAnArrayOf, getRandomElementOf } from 'utils'
import { faker } from 'utils/faker'
import { ColumnDef } from 'utils/hooks'

import { ChevronsDown, ChevronsUp, ChevronsUpDown } from '../Icons'
import { Button, DataTable } from '../components'

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
  status: 'failed' | 'pending' | 'processing' | 'success'
}

function fakePayment(): Payment {
  return {
    amount: faker.number.int({ max: 500, min: 10 }),
    email: faker.internet.email(),
    id: faker.string.uuid(),
    status: getRandomElementOf(paymentStatus)
  }
}

const payments: Payment[] = getAnArrayOf(
  fakePayment,
  faker.number.int({ max: 42, min: 5 })
)

const columns: ColumnDef<Payment>[] = [
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
    header: ({ column }) => {
      let Icon = <ChevronsUpDown size={12} />

      if (column.getIsSorted() === 'asc') Icon = <ChevronsDown size={12} />
      if (column.getIsSorted() === 'desc') Icon = <ChevronsUp size={12} />

      return (
        <div className="text-right flex flex-row justify-end">
          <Button
            className="flex flex-row justify-start items-center gap-1 p-0 m-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            variant={'ghost'}
          >
            Amount {Icon}
          </Button>
        </div>
      )
    }
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

function DataTableFixture() {
  return (
    <div className="w-full m-8 justify-self-start self-stretch grow">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}

export default <DataTableFixture />
