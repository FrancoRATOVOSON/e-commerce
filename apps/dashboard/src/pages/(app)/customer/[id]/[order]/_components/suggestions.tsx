import React from 'react'

import { Link, useParams } from '@/router'
import { useShopperDetailsContext } from '@customer/_contexts'
import { useCurrentOrderId } from '@customer/_hooks'
import { OrderOverview, detailToOverview } from '@customer/_lib'
import { useDebounce } from '@uidotdev/usehooks'
import { Button, Indicator, Search } from 'ui/components'
import { ArrowLeft } from 'ui/icons'
import { cn } from 'ui/utils'
import { format } from 'utils'
import { OrderStatusType } from 'utils/types'

import { PriceDisplay } from '@/pages/(app)/_components'

interface ElementProps
  extends Pick<OrderOverview, 'amount' | 'id' | 'status' | 'validatedAt'> {
  className?: string
}

function Element({ amount, className, id, status, validatedAt }: ElementProps) {
  const userId = useParams('/customer/:id/:order').id
  const currentOrderId = useCurrentOrderId()

  return (
    <div
      className={cn(
        'p-4 hover:bg-muted border border-border',
        currentOrderId === id && 'bg-primary/10',
        className
      )}
    >
      <Link
        className="flex flex-col justify-start items-stretch gap-2"
        params={{ id: userId, order: id.toString() }}
        to={'/customer/:id/:order'}
      >
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col justify-start items-start">
            <h3 className="font-medium text-sm">{id}</h3>
            {validatedAt && (
              <p className="text-xs text-muted-foreground">
                {format(validatedAt, 'dd/MM/yyyy')}
              </p>
            )}
          </div>
          <Indicator
            state={status === OrderStatusType.DONE ? 'success' : 'error'}
          />
        </div>
        <p className="font-semibold">
          <PriceDisplay value={amount} />
        </p>
      </Link>
    </div>
  )
}

interface SuggestionsProps {
  className?: string
}

export default function Suggestions({ className }: SuggestionsProps) {
  const [searchId, setSearchId] = React.useState('')
  const debouncedSearchTerm = useDebounce(searchId, 300)
  const shopperId = useParams('/customer/:id/:order').id
  const details = useShopperDetailsContext()

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchId(e.target.value),
    [setSearchId]
  )

  return (
    <div
      className={cn(
        'flex flex-col justify-start items-stretch w-full',
        'md:w-80',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-row justify-start items-center gap-2',
          'md:flex-col'
        )}
      >
        <Button
          asChild
          className={cn('grow-0 self-start mt-2 ml-2', 'md:w-full md:m-0')}
          variant={'secondary'}
        >
          <Link params={{ id: shopperId }} to={'/customer/:id'}>
            <div>
              <ArrowLeft size={16} />
            </div>
            <span>Revenir</span>
          </Link>
        </Button>
        <Search
          className="grow max-w-72 mx-2 mt-2"
          onChange={handleChange}
          placeholder="Rechercher"
        />
      </div>
      <div
        className={cn(
          'flex flex-row justify-start items-center mt-4',
          'md:flex-col md:items-stretch md:gap-0 gap-2 overflow-auto'
        )}
      >
        {details.details.orders.map(order =>
          debouncedSearchTerm.length > 1 &&
          !order.id.toString().includes(debouncedSearchTerm) ? null : (
            <Element key={order.id} {...detailToOverview(order)} />
          )
        )}
      </div>
    </div>
  )
}
