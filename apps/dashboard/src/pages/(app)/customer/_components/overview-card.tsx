import React from 'react'

import { ShopperData } from 'database/types'
import {
  Button,
  CardContainer,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Container,
  Indicator
} from 'ui/components'
import { ChevronDown, ChevronRight } from 'ui/icons'
import { cn } from 'ui/utils'
import { format } from 'utils'

import { PriceDisplay } from '../../_components'

interface OverviewCardProps extends ShopperData {
  className?: string
}

export default function OverviewCard({
  amountPerOrder,
  className,
  isOrdering,
  itemsTotalPruchased,
  lastOrderDate,
  productTotalPurchased,
  totalAmount,
  validatedOrders,
  waitingOrders
}: OverviewCardProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const Data = React.useCallback(
    ({
      children,
      className: clss,
      description,
      label
    }: {
      children: React.ReactNode
      className?: string
      description?: string
      label: string
    }) => (
      <Container
        className={cn(
          'flex flex-col justify-start items-stretch gap-2',
          'sm:grid sm:grid-cols-3',
          clss
        )}
      >
        <div className="col-span-2 flex flex-col justify-start items-start gap-0">
          <p className="text-sm">{label}</p>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="font-medium">{children}</div>
      </Container>
    ),
    []
  )

  return (
    <CardContainer className={cn('p-4', className)}>
      <Collapsible
        className="transition-all"
        onOpenChange={setIsOpen}
        open={isOpen}
      >
        <CollapsibleTrigger asChild>
          <Button
            className="flex flex-row justify-start items-center gap-2"
            fullWidth
            variant={'ghost'}
          >
            <span>
              {isOpen ? (
                <ChevronDown className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </span>
            <span>Informatios générales</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <CardContainer className="p-6 flex flex-col justify-start items-start gap-4">
            <div className="flex flex-row justify-start items-center gap-2">
              <Indicator state={isOrdering ? 'success' : 'error'} />
              <p className="font-medium">
                {isOrdering
                  ? 'Possède un panier encore non valié.'
                  : `Ne possède pas actuellement de panier non validé`}
              </p>
            </div>
            <div
              className={cn(
                'flex flex-col justify-start items-start gap-4',
                'lg:grid lg:grid-rows-4 lg:grid-flow-col place-items-start',
                '2xl:grid-rows-3'
              )}
            >
              <Data label="Date de la dernière commande :">
                {format(lastOrderDate, 'dd/MM/yyyy')}
              </Data>
              <Data label="Nombres de commandes validées en attente de livraison :">
                {waitingOrders}
              </Data>
              <Data label="Nombres de commandes validées et livrées :">
                {validatedOrders}
              </Data>
              <Data label="Montant moyen d'une commande :">
                <PriceDisplay value={amountPerOrder} />
              </Data>
              <Data label="Somme des montants de toute les commandes livrées :">
                <PriceDisplay value={totalAmount} />
              </Data>
              <Data label="Nombre total de produits acheté :">
                {productTotalPurchased}
              </Data>
              <Data label="Nombre total d'articles' acheté :">
                {itemsTotalPruchased}
              </Data>
            </div>
          </CardContainer>
        </CollapsibleContent>
      </Collapsible>
    </CardContainer>
  )
}
