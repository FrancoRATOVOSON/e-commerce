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
import { OrderStatusType } from 'utils/types'

interface OrderCardProps extends OrderOverview {
  className?: string
}

export default function OrderCard({
  amount,
  className,
  id,
  itemCount,
  productCount,
  status
}: OrderCardProps) {
  return (
    <CardContainer
      className={cn(
        'py-2 px-0 flex flex-col justify-start items-stretch gap-2',
        'min-w-60 md:max-w-80',
        className
      )}
    >
      <CardHeader className="flex flex-row justify-between items-center p-0">
        <Button
          className="flex flex-row justify-between items-center gap-2 hover:bg-background group"
          fullWidth
          variant={'ghost'}
        >
          <span>
            <ArrowUpRightSquare className="size-4" />
          </span>
          <span className="group-hover:underline">{id}</span>
          <div>
            <Indicator
              state={status === OrderStatusType.DONE ? 'success' : 'error'}
            />
          </div>
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center p-0">
        <div className="text-lg font-medium">
          <Price {...amount} />
        </div>
        <div className="text-sm text-muted-foreground">{`${productCount} produits / ${itemCount} articles`}</div>
      </CardContent>
    </CardContainer>
  )
}
