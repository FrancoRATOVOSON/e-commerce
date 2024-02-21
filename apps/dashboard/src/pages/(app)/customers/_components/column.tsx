import * as React from 'react'

import { Link } from '@/components'
import { ShopperData } from 'database/types'
import {
  Button,
  DataTableActionCell,
  DataTableHeader,
  DataTableNumberCell,
  DataTablePriceCell,
  DataTableTextCell,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  openSheet
} from 'ui/components'
import { ArrowUpRightFromSquare, BadgeInfo, MoreHorizontal } from 'ui/icons'
import { cn } from 'ui/utils'
import { format } from 'utils'
import { ColumnDef } from 'utils/hooks'

import Overview from './overview'

const details: ColumnDef<ShopperData> = {
  cell: ({ row }) => {
    const shopper = row.original
    return (
      <DataTableActionCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size={'icon'} variant={'ghost'}>
              <div>
                <MoreHorizontal className="h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                className="flex flex-row justify-start items-center gap-4"
                to={`/customer/${shopper.id}`}
                variant={'ghost'}
              >
                <ArrowUpRightFromSquare className="w-4 h-4" />
                Détails
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                className="flex flex-row justify-start items-center gap-4"
                onClick={() =>
                  openSheet({ content: <Overview shopper={row.original} /> })
                }
                variant={'ghost'}
              >
                <BadgeInfo className="w-4 h-4" />
                Apperçu
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DataTableActionCell>
    )
  },
  id: 'details'
}

const login: ColumnDef<ShopperData> = {
  accessorKey: 'login',
  cell: ({ row }) => (
    <DataTableTextCell className="font-medium" text={row.original.login} />
  ),
  enableHiding: false,
  enableSorting: true,
  header: ({ column }) => <DataTableHeader column={column} title="Email" />
}

const isOrdering: ColumnDef<ShopperData> = {
  accessorKey: 'isOrdering',
  cell: ({ row }) => (
    <div className="flex justify-center items-center">
      <div
        className={cn(
          'w-4 h-4 rounded-full',
          row.original.isOrdering
            ? 'bg-success-foreground'
            : 'bg-error-foreground'
        )}
      />
    </div>
  ),
  enableHiding: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Panier en cours"
      tooltip="Indique si le client a un panier pas encore validé"
    />
  )
}

const waitingOrders: ColumnDef<ShopperData> = {
  accessorKey: 'waitingOrders',
  cell: ({ row }) => <DataTableNumberCell value={row.original.waitingOrders} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Commandes en cours"
      tooltip="Indique le nombre de panier que le client a validé et dont il attend la livraison"
    />
  )
}

const validatedOrders: ColumnDef<ShopperData> = {
  accessorKey: 'validatedOrders',
  cell: ({ row }) => (
    <DataTableNumberCell value={row.original.validatedOrders} />
  ),
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader column={column} title="Commandes livrées" />
  )
}

const amountPerOrder: ColumnDef<ShopperData> = {
  accessorKey: 'amountPerOrder',
  cell: ({ row }) => <DataTablePriceCell value={row.original.amountPerOrder} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Montant moyen"
      tooltip={`Montant moyen d'une commande`}
    />
  )
}

const totalAmount: ColumnDef<ShopperData> = {
  accessorKey: 'totalAmount',
  cell: ({ row }) => <DataTablePriceCell value={row.original.totalAmount} />,
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Montant total"
      tooltip={`Somme des montants total des commandes livré`}
    />
  )
}

const productTotalPurchased: ColumnDef<ShopperData> = {
  accessorKey: 'productTotalPurchased',
  cell: ({ row }) => (
    <DataTableNumberCell value={row.original.productTotalPurchased} />
  ),
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Types de produits acheté"
      tooltip={`Nombre total de type de produits acheté`}
    />
  )
}

const itemsTotalPruchased: ColumnDef<ShopperData> = {
  accessorKey: 'itemsTotalPruchased',
  cell: ({ row }) => (
    <DataTableNumberCell value={row.original.itemsTotalPruchased} />
  ),
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      column={column}
      title="Articles acheté"
      tooltip={`Nombre total d'articles acheté`}
    />
  )
}

const lastCommandDate: ColumnDef<ShopperData> = {
  accessorKey: 'lastCommandDate',
  cell: ({ row }) => (
    <DataTableTextCell className="text-right">
      {format(row.original.lastCommandDate, 'dd/MM/yyyy')}
    </DataTableTextCell>
  ),
  enableHiding: true,
  enableSorting: true,
  header: ({ column }) => (
    <DataTableHeader
      className="text-right"
      column={column}
      title="Dernière commande"
      tooltip={`Date de la dernière commande validée`}
    />
  )
}

export {
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
}
