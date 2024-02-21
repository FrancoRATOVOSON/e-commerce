import * as React from 'react'

import { PriceDetails } from 'utils/types'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  SlidersHorizontal
} from '../../Icons'
import { cn } from '../../utils'
import { Button } from '../Button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../DropdownMenu'
import { Container } from '../Layout'
import Price from '../Price'
import Search from '../Search'
import { Select, SelectController } from '../Select'
import { Tooltip } from '../Tooltip'
import { DataTableElementProps } from './DataTable'
import { DataTablePaginationLabels, SearchProps } from './types'

interface DataTableActionCellProps {
  children: React.ReactNode
  tooltip?: string
}

function DataTableActionCell({ children, tooltip }: DataTableActionCellProps) {
  return tooltip ? (
    <Tooltip content={tooltip}>{children}</Tooltip>
  ) : (
    <>{children}</>
  )
}

interface DataTableTextCellProps {
  children?: React.ReactNode
  className?: string
  text?: React.ReactNode
}

function DataTableTextCell({
  children,
  className,
  text
}: DataTableTextCellProps) {
  return (
    <p className={cn('text-sm', className)}>
      {text}
      {children}
    </p>
  )
}

interface DataTablePriceCellProps {
  className?: string
  value: PriceDetails | number
}

function DataTablePriceCell({ className, value }: DataTablePriceCellProps) {
  return (
    <DataTableTextCell className={cn('font-medium', className)}>
      <Price
        currency={typeof value === 'number' ? undefined : value.currency}
        value={typeof value === 'number' ? value : value.value}
      />
    </DataTableTextCell>
  )
}

interface DataTableNumberCellProps {
  className?: string
  value: number | string
}

function DataTableNumberCell({ className, value }: DataTableNumberCellProps) {
  return (
    <DataTableTextCell className={cn('text-center', className)}>
      {value}
    </DataTableTextCell>
  )
}

interface DataTablePaginationProps<TData> extends DataTableElementProps<TData> {
  labels?: DataTablePaginationLabels
}

function DataTablePagination<TData>({
  labels,
  table
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center space-x-6 lg:space-x-8">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">
          {labels?.rowsPerPage || 'Rows per page'}
        </p>
        <Select
          onValueChange={value => {
            table.setPageSize(Number(value))
          }}
          options={[5, 10, 20, 30, 40, 50].map(pageSize => ({
            label: `${pageSize}`,
            value: `${pageSize}`
          }))}
          value={`${table.getState().pagination.pageSize}`}
        >
          <SelectController
            className="h-8 w-16"
            placeholder={`${table.getState().pagination.pageSize}`}
          />
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} /{' '}
        {table.getPageCount()}
      </div>
      <div className="flex items-center space-x-2">
        <Tooltip content={labels?.firstPage || 'First Page'} side="top">
          <Button
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            variant="outline"
          >
            <ChevronsLeft size={16} />
          </Button>
        </Tooltip>
        <Tooltip content={labels?.previousPage || 'Previous'} side="top">
          <Button
            className="h-8 w-8 p-0"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            variant="outline"
          >
            <ChevronLeft size={16} />
          </Button>
        </Tooltip>
        <Tooltip content={labels?.nextPage || 'Next'} side="top">
          <Button
            className="h-8 w-8 p-0"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            variant="outline"
          >
            <ChevronRight size={16} />
          </Button>
        </Tooltip>
        <Tooltip content={labels?.lastPage || 'Last Page'} side="top">
          <Button
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            variant="outline"
          >
            <ChevronsRight size={16} />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}

interface DataTableRowSelectionProps<TData>
  extends DataTableElementProps<TData> {
  label?: (rows: number, selected: number) => string
}

function DataTableRowSelection<TData>({
  label = (rows, selected) => `${selected} of ${rows} selected`,
  table
}: DataTableRowSelectionProps<TData>) {
  return (
    <div className="flex-1 text-sm text-muted-foreground">
      {label(
        table.getFilteredSelectedRowModel().rows.length,
        table.getFilteredRowModel().rows.length
      )}
    </div>
  )
}

interface DataTableViewOptionsProps<TData>
  extends DataTableElementProps<TData> {
  labels?: {
    description?: string
    title?: string
  }
}

function DataTableViewOptions<TData>({
  labels,
  table
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="ml-auto flex justify-end items-center gap-2"
          variant="outline"
        >
          <SlidersHorizontal size={16} />
          {labels?.title || 'View'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>
          {labels?.description || 'Toggle columns'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map(column => (
            <DropdownMenuCheckboxItem
              checked={column.getIsVisible()}
              className="capitalize"
              key={column.id}
              onCheckedChange={value => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface DataTableSearchProps<TData> extends DataTableElementProps<TData> {
  column: keyof TData
  placeholder?: string
}

function DataTableSearch<TData>({
  column,
  placeholder,
  table
}: DataTableSearchProps<TData>) {
  return (
    <Search
      onChange={e =>
        table.getColumn(column.toString())?.setFilterValue(e.target.value)
      }
      placeholder={placeholder}
      value={table.getColumn(column.toString())?.getFilterValue() as string}
    />
  )
}

type DataTableToolbarProps<TData> = DataTableElementProps<TData> & {
  children?: React.ReactNode
  visibility?: boolean
} & SearchProps<TData>

function DataTableToolbar<TData>({
  children,
  table,
  visibility = false,
  ...props
}: DataTableToolbarProps<TData>) {
  const Wrapper = children && props.search ? Container : React.Fragment
  const { search } = props

  return (
    <div
      className={cn(
        'flex items-center mb-4',
        (children || search) && visibility && 'justify-between',
        visibility && !(children || search) && 'justify-end'
      )}
    >
      <Wrapper className="flex flex-row justify-start items-center gap-2">
        {props.search && (
          <DataTableSearch column={props.searchColumn} table={table} />
        )}
        {children}
      </Wrapper>
      {visibility && <DataTableViewOptions table={table} />}
    </div>
  )
}

export {
  DataTableActionCell,
  DataTableNumberCell,
  DataTablePagination,
  DataTablePriceCell,
  DataTableRowSelection,
  DataTableTextCell,
  DataTableToolbar,
  DataTableViewOptions
}
