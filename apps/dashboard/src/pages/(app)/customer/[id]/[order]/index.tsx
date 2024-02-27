import React from 'react'

import { Navigate, useParams } from '@/router'
import { Container } from 'ui/components'
import { cn } from 'ui/utils'

import { useCurrentOrderId, useOrderDetailsGet } from '../../_hooks'
import { Overview, ProductListTable, Suggestions } from './_components'

export default function Order() {
  const currentOrderId = useCurrentOrderId()
  const shopperId = useParams('/customer/:id').id
  const order = useOrderDetailsGet(currentOrderId || 0)

  if (currentOrderId === null || order === null) {
    return <Navigate params={{ id: shopperId }} to={'/customer/:id'} />
  }

  return (
    <Container
      className={cn('flex flex-col justify-start items-stretch', 'md:flex-row')}
    >
      <Suggestions
        className={cn(
          'grow',
          'md:grow-0 md:h-full max-w-screen overflow-auto no-scrollbar',
          'md:border-r border-b border-border md:flex-[0_0_256px]',
          'md:max-h-[90vh]'
        )}
      />
      <Container className="p-4 mb-4 flex flex-col justify-start items-stretch gap-4 grow overflow-y-auto">
        <Overview {...order.overview} />
        <ProductListTable products={order.order.products} />
      </Container>
    </Container>
  )
}
