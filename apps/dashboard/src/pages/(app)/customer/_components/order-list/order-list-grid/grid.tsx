import React from 'react'

import { OrderOverview } from '@customer/_lib'
import { Container } from 'ui/components'
import { cn } from 'ui/utils'

import OrderCard from './card'

interface OrderListGridProps {
  className?: string
  details: Array<OrderOverview>
}

export default function OrderListGrid({
  className,
  details
}: OrderListGridProps) {
  return (
    <Container
      className={cn(
        'flex flex-row justify-between items-start gap-6 flex-wrap grow',
        className
      )}
    >
      {details.map(detail => (
        <OrderCard className={cn('flex-1')} key={detail.id} {...detail} />
      ))}
    </Container>
  )
}
