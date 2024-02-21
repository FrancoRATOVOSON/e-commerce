import * as React from 'react'

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useTable
} from 'utils/hooks'

import { cn } from '../../utils'
import { Container } from '../Layout'
import { TooltipProvider } from '../Tooltip'
import {
  DataTablePagination,
  DataTableRowSelection,
  DataTableToolbar
} from './DataTableComponents'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './Table'
import { DataTablePaginationLabels, SearchProps } from './types'

type DataTableElementProps<TData> = {
  table: TableType<TData>
}

type DataTableColumnProps<TData, TValue> = {
  column: Column<TData, TValue>
}

type DataTableProps<TData, TValue> = {
  className?: string
  columns: ColumnDef<TData, TValue>[]
  customPagination?: boolean
  data: TData[]
  filtering?: boolean
  pagination?: boolean
  paginationLabels?: DataTablePaginationLabels
  selection?: boolean
  selectionLabel?: (rows: number, selected: number) => string
  sorting?: boolean
  toolbar?: ({
    table
  }: { [key: string]: any } & DataTableElementProps<TData>) => React.JSX.Element
  visibility?: boolean
} & SearchProps<TData>

function DataTable<TData, TValue>({
  className,
  columns,
  customPagination = false,
  data,
  filtering = false,
  pagination = false,
  paginationLabels,
  selection = false,
  selectionLabel,
  sorting: enableSorting = false,
  toolbar: Toolbar,
  visibility = false,
  ...props
}: DataTableProps<TData, TValue>) {
  const { search } = props
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(enableSorting && {
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: setSorting
    }),
    ...(visibility && { onColumnVisibilityChange: setColumnVisibility }),
    ...(selection && { onRowSelectionChange: setRowSelection }),
    ...((filtering || search) && {
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: setColumnFilters
    }),

    state: {
      ...(visibility && { columnVisibility }),
      ...(selection && { rowSelection }),
      ...(enableSorting && { sorting }),
      ...((filtering || search) && { columnFilters })
    }
  })

  return (
    <TooltipProvider delayDuration={100}>
      <Container className={cn('h-fit', className)}>
        {(visibility || search || Toolbar) && (
          <DataTableToolbar table={table} visibility={visibility} {...props}>
            {Toolbar && <Toolbar table={table} />}
          </DataTableToolbar>
        )}
        <Container className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <TableHead key={header.id}>
                      {!header.isPlaceholder &&
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map(row => (
                  <TableRow
                    data-state={row.getIsSelected() && 'selected'}
                    key={row.id}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell className="text-center" colSpan={columns.length}>
                    Il n'y a rien ici
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Container>
        {(selection || pagination || customPagination) && (
          <div
            className={cn(
              'flex justify-between items-center px-2 mt-4',
              selection && !(pagination || customPagination) && 'justify-start',
              !selection && (pagination || customPagination) && 'justify-end'
            )}
          >
            {selection && (
              <DataTableRowSelection label={selectionLabel} table={table} />
            )}
            {pagination && !customPagination && (
              <DataTablePagination labels={paginationLabels} table={table} />
            )}
          </div>
        )}
      </Container>
    </TooltipProvider>
  )
}

export { DataTable, type DataTableColumnProps, type DataTableElementProps }
