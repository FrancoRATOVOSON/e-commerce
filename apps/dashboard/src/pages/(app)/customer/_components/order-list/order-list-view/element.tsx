import React from 'react'

import { OrderOverview } from '@customer/_lib'
import {
  Button,
  CardContainer,
  CardContent,
  CardHeader,
  Indicator,
  Price
} from 'ui/components'
import { ArrowUpRightSquare } from 'ui/icons'
import { cn } from 'ui/utils'
import { format } from 'utils'
import { OrderStatusType } from 'utils/types'

interface OrderListElementProps extends OrderOverview {
  className?: string
}

export default function OrderListElement({
  amount,
  className,
  deliveredAt,
  id,
  itemCount,
  productCount,
  status,
  validatedAt
}: OrderListElementProps) {
  return (
    <CardContainer
      className={cn(
        'px-4 py-4 w-full flex flex-col justify-between items-stretch gap-2',
        className
      )}
    >
      <CardHeader className="flex flex-row justify-between items-center p-0">
        <Button
          className="flex flex-row justify-between items-center gap-2"
          variant={'secondary'}
        >
          <span>{id}</span>
          <span>
            <ArrowUpRightSquare className="size-4" />
          </span>
        </Button>
        <div>
          <Indicator
            state={status === OrderStatusType.DONE ? 'success' : 'error'}
          />
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          'flex flex-col justify-start items-start p-0',
          'sm:flex-row sm:justify-between sm:items-end sm:gap-0'
        )}
      >
        <div className="text-lg font-medium">
          <Price {...amount} />
        </div>
        <div
          className={cn(
            'text-sm text-muted-foreground',
            'flex flex-col justify-end items-center',
            'md:flex-row md:justify-center md:items-end md:gap-1'
          )}
        >
          <p>{`${productCount} produts /`}</p>
          <p>{`${itemCount} articles`}</p>
        </div>
        {validatedAt && (
          <div className={cn('text-sm text-muted-foreground text-right')}>
            {deliveredAt ? (
              <>
                <p>{`Commandé le ${format(validatedAt, 'dd/MM/yyyy')}`}</p>
                <p>{`Livrée le ${format(deliveredAt, 'dd/MM/yyyy')}`}</p>
              </>
            ) : (
              `Commandé le ${format(validatedAt, 'dd/MM/yyyy')}`
            )}
          </div>
        )}
      </CardContent>
    </CardContainer>
  )
}
