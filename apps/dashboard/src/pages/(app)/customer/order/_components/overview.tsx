import React from 'react'

import { OrderOverview } from '@customer/_lib'
import {
  Badge,
  Button,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader
} from 'ui/components'
import { cn } from 'ui/utils'
import { format } from 'utils'
import { OrderStatusType } from 'utils/types'

import { PriceDisplay } from '@/pages/(app)/_components'

interface OverviewProps extends OrderOverview {
  className?: string
}

export default function Overview({
  amount,
  className,
  deliveredAt,
  id,
  status,
  validatedAt
}: OverviewProps) {
  let badge: {
    label: 'Livré' | 'Pas encore livré' | 'Érreur'
    theme: 'default' | 'error' | 'success'
  }

  switch (status) {
    case OrderStatusType.VALIDATED:
      badge = {
        label: 'Pas encore livré',
        theme: 'default'
      }
      break
    case OrderStatusType.DONE:
      badge = {
        label: 'Livré',
        theme: 'success'
      }
      break
    default:
      badge = {
        label: 'Érreur',
        theme: 'error'
      }
      break
  }

  return (
    <CardContainer className={cn(className)}>
      <CardHeader>
        <div>
          <div>
            <h1>{id}</h1>
            <Badge {...badge} />
          </div>
          {validatedAt && (
            <CardDescription>
              {`Commandé le ${format(validatedAt, 'dd MMMM yyyy')}`}
            </CardDescription>
          )}
        </div>
        <div>
          <Button disabled={status === OrderStatusType.DONE} variant={'action'}>
            {status === OrderStatusType.DONE
              ? 'Commande Livrée'
              : 'Marquer comme livrée'}
          </Button>
          {deliveredAt && <p>{`le ${format(deliveredAt, 'dd MMMM yyyy')}`}</p>}
        </div>
      </CardHeader>
      <CardContent>
        <p>
          <span>Montant total :</span>
          <span>
            <PriceDisplay value={amount} />
          </span>
        </p>
      </CardContent>
    </CardContainer>
  )
}
