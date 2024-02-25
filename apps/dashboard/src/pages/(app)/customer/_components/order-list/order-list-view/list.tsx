import React from 'react'

import { OrderOverview } from '@customer/_lib'
import { Container } from 'ui/components'
import { cn } from 'ui/utils'

import OrderListElement from './element'

interface OrderListViewProps {
  className?: string
  details: Array<OrderOverview>
}

export default function OrderListView({
  className,
  details
}: OrderListViewProps) {
  return (
    <Container
      className={cn(
        'flex flex-col justify-start items-stretch gap-6',
        className
      )}
    >
      {details.map(detail => (
        <OrderListElement key={detail.id} {...detail} />
      ))}
    </Container>
  )
}
