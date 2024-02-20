import * as React from 'react'

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
import { Select, SelectController } from '../Select'
import { Tooltip, TooltipProvider } from '../Tooltip'
import { DataTableElementProps } from './DataTable'
import { DataTablePaginationLabels } from './types'

interface ActionCellProps {
  children: React.ReactNode
  tooltip?: string
}

function ActionCell({ children, tooltip }: ActionCellProps) {
  return tooltip ? (
    <Tooltip content={tooltip}>{children}</Tooltip>
  ) : (
    <>{children}</>
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
          options={[10, 15, 20, 30, 40, 50].map(pageSize => ({
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
        <TooltipProvider delayDuration={100}>
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
        </TooltipProvider>
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
        <Button className="ml-auto lg:flex" variant="outline">
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

interface DataTableToolbarProps<TData> extends DataTableElementProps<TData> {
  children?: React.ReactNode
  className?: string
  visibility?: boolean
}

function DataTableToolbar<TData>({
  children,
  className,
  table,
  visibility = false
}: DataTableToolbarProps<TData>) {
  return (
    <div
      className={cn(
        'flex items-center',
        children && visibility && 'justify-between',
        visibility && !children && 'justify-end',
        className
      )}
    >
      {children}
      {visibility && <DataTableViewOptions table={table} />}
    </div>
  )
}

export {
  ActionCell,
  DataTablePagination,
  DataTableRowSelection,
  DataTableToolbar,
  DataTableViewOptions
}
