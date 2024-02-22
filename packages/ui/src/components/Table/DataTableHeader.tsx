import * as React from 'react'

import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  ChevronsUpDown,
  EyeOff
} from '../../Icons'
import { cn } from '../../utils'
import { Button } from '../Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../DropdownMenu'
import { Tooltip } from '../Tooltip'
import { DataTableColumnProps } from './DataTable'

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement>,
    DataTableColumnProps<TData, TValue> {
  sorting?: boolean
  title: string
  tooltip?: string
  visibility?: boolean
  labels?: {
    asc?: string
    desc?: string
    hide?: string
  }
}

export default function DataTableColumnHeader<TData, TValue>({
  className,
  column,
  labels,
  sorting: sort,
  title,
  tooltip,
  visibility: hide
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sorting = sort === false ? false : column.getCanSort()
  const visibility = hide === false ? false : column.getCanHide()

  const Wrapper = tooltip ? Tooltip : React.Fragment

  if (!sorting) {
    return (
      <Wrapper content={tooltip} side="bottom">
        <div className={cn(className)}>{title}</div>
      </Wrapper>
    )
  }

  let icon
  switch (column.getIsSorted()) {
    case 'desc':
      icon = <ArrowDownWideNarrow className="ml-2" size={16} />
      break
    case 'asc':
      icon = <ArrowUpNarrowWide className="ml-2" size={16} />
      break
    default:
      icon = <ChevronsUpDown className="ml-2" size={16} />
      break
  }

  return (
    <Wrapper content={tooltip} side="bottom">
      <div
        className={cn(
          'flex items-center',
          sorting && visibility && 'space-x-2',
          className
        )}
      >
        {!sorting && !visibility ? (
          <span>{title}</span>
        ) : (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="-ml-3 h-8 data-[state=open]:bg-accent"
                  variant="ghost"
                >
                  <span>{title}</span>
                  {icon}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {sorting && (
                  <>
                    <DropdownMenuItem
                      onClick={() => column.toggleSorting(false)}
                    >
                      <ArrowUpNarrowWide
                        className="mr-2 text-muted-foreground/70"
                        size={16}
                      />
                      {labels?.asc || 'Asc'}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => column.toggleSorting(true)}
                    >
                      <ArrowDownWideNarrow
                        className="mr-2 text-muted-foreground/70"
                        size={16}
                      />
                      {labels?.desc || 'Desc'}
                    </DropdownMenuItem>
                  </>
                )}
                {sorting && visibility && <DropdownMenuSeparator />}
                {visibility && (
                  <DropdownMenuItem
                    onClick={() => column.toggleVisibility(false)}
                  >
                    <EyeOff
                      className="mr-2 text-muted-foreground/70"
                      size={16}
                    />
                    {labels?.hide || 'Hide'}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </Wrapper>
  )
}