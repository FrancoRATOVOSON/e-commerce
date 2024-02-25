import React from 'react'

import {
  CardContainer,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from 'ui/components'
import { LayoutGrid, LayoutList, TableProperties } from 'ui/icons'
import { cn } from 'ui/utils'

import { useFormatShopperOrders } from '../../_hooks'
import { OrderListGrid } from './order-list-grid'
import { OrderListTable } from './order-list-table'
import { OrderListView } from './order-list-view'

interface OrderSectionProps {
  className?: string
}

export default function OrderSection({ className }: OrderSectionProps) {
  const details = useFormatShopperOrders()

  return (
    <CardContainer className={cn('p-6', className)}>
      <Tabs defaultValue="table-view">
        <div className="flex flex-row justify-between items-end mb-6">
          <h1 className="text-2xl font-medium">Les commandes</h1>
          <TabsList>
            <TabsTrigger value="table-view">
              <div className="size-6 flex justify-center items-center">
                <TableProperties size={16} />
              </div>
            </TabsTrigger>
            <TabsTrigger value="grid-view">
              <div className="size-6 flex justify-center items-center">
                <LayoutGrid size={16} />
              </div>
            </TabsTrigger>
            <TabsTrigger value="list-view">
              <div className="size-6 flex justify-center items-center">
                <LayoutList size={16} />
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="table-view">
          <OrderListTable details={details} />
        </TabsContent>
        <TabsContent value="grid-view">
          <OrderListGrid details={details} />
        </TabsContent>
        <TabsContent value="list-view">
          <OrderListView details={details} />
        </TabsContent>
      </Tabs>
    </CardContainer>
  )
}
