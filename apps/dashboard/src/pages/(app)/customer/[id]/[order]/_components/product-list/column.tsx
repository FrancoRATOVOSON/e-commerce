import { ProductOrder } from 'database/types'
import {
  Badge,
  DataTableHeader,
  DataTableNumberCell,
  DataTablePriceCell,
  DataTableTextCell
} from 'ui/components'
import { ColumnDef } from 'utils/hooks'

type ProductOrderTableColumn = ColumnDef<ProductOrder>

const name: ProductOrderTableColumn = {
  accessorKey: 'name',
  cell: ({ row }) => <DataTableTextCell text={row.original.name} />,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader className="text-left" column={column} title="Produit" />
  )
}

const category: ProductOrderTableColumn = {
  accessorKey: 'category',
  cell: ({ row }) => (
    <DataTableTextCell>
      <Badge label={row.original.category} size={'normal'} />
    </DataTableTextCell>
  ),
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      className="text-center"
      column={column}
      title="Categorie"
    />
  )
}

const tags: ProductOrderTableColumn = {
  accessorKey: 'tags',
  cell: ({ row }) => (
    <div className="flex flex-col justify-start items-center gap-1">
      {row.original.tags.map(tag => (
        <Badge key={tag} label={tag} size="sm" variant="secondary" />
      ))}
    </div>
  ),
  enableHiding: true,
  header: ({ column }) => <DataTableHeader column={column} title="Tag" />
}

const price: ProductOrderTableColumn = {
  accessorKey: 'price',
  cell: ({ row }) => <DataTablePriceCell value={row.original.price} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Prix Unitaire" />
  )
}

const discount: ProductOrderTableColumn = {
  accessorKey: 'discount',
  cell: ({ row }) => <DataTableNumberCell value={row.original.discount} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Réduction (%)" />
  )
}

const quantity: ProductOrderTableColumn = {
  accessorKey: 'quantity',
  cell: ({ row }) => <DataTableNumberCell value={row.original.quantity} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => <DataTableHeader column={column} title="Quantité" />
}

const amount: ProductOrderTableColumn = {
  accessorFn: row => {
    const {
      discount: reduction,
      price: { value: unitPrice },
      quantity: qtt
    } = row

    return unitPrice * qtt * (reduction / 100)
  },
  cell: ({ row }) => {
    const {
      original: {
        price: { currency }
      }
    } = row

    return (
      <DataTablePriceCell
        value={{ currency, value: row.getValue('amount') as number }}
      />
    )
  },
  enableSorting: true,
  header: ({ column }) => <DataTableHeader column={column} title="Montant" />,
  id: 'amount'
}

export { amount, category, discount, name, price, quantity, tags }
