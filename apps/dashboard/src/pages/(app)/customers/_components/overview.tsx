import * as React from 'react'

import { Link } from '@/router'
import { ShopperData } from 'database/types'
import {
  Button,
  Container,
  Price,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from 'ui/components'
import { ArrowUpRightFromSquare } from 'ui/icons'
import { cn } from 'ui/utils'
import { format } from 'utils'
import { PriceDetails } from 'utils/types'

interface OverviewProps {
  shopper: ShopperData
}

function Overview({ shopper }: OverviewProps) {
  const {
    amountPerOrder,
    id,
    isOrdering,
    itemsTotalPruchased,
    lastOrderDate,
    login,
    productTotalPurchased,
    totalAmount,
    validatedOrders,
    waitingOrders
  } = shopper

  const PriceDisplay = React.useCallback(
    ({ value }: { value: PriceDetails | number }) => (
      <Price
        currency={typeof value === 'number' ? undefined : value.currency}
        value={typeof value === 'number' ? value : value.value}
      />
    ),
    [shopper]
  )

  const Data = React.useCallback(
    ({
      children,
      className,
      label
    }: {
      children: React.ReactNode
      className?: string
      label: string
    }) => (
      <div
        className={cn(
          'flex flex-col justify-start items-start gap-0',
          className
        )}
      >
        <p className="text-sm font-medium">{label}</p>
        {children}
      </div>
    ),
    [shopper]
  )
  return (
    <SheetContent className="flex flex-col justify-start items-start">
      <SheetHeader>
        <SheetTitle>Apperçu</SheetTitle>
        <SheetDescription>Utilisateur: {login}</SheetDescription>
      </SheetHeader>
      <Container className="w-fit flex flex-col justify-start items-start gap-3 text-sm overflow-y-scroll pb-4 self-stretch grow">
        <div className="flex flex-row justify-start items-center gap-1">
          <div
            className={cn(
              'w-4 h-4 rounded-full',
              isOrdering ? 'bg-success-foreground' : 'bg-error-foreground'
            )}
          />
          <p>
            {isOrdering
              ? 'Possède un panier encore non valié.'
              : `Ne possède pas actuellement de panier non validé`}
          </p>
        </div>
        <Data label="Nombres de commandes validées en attente de livraison">
          {waitingOrders}
        </Data>
        <Data label="Nombres de commandes validées et livrées">
          {validatedOrders}
        </Data>
        <Data label="Montant moyen d'une commande :">
          <PriceDisplay value={amountPerOrder} />
        </Data>
        <Data label="Somme des montants de toute les commandes livrées">
          <PriceDisplay value={totalAmount} />
        </Data>
        <Data className="gap-0" label="Nombre total de produits acheté">
          <p className="text-sm text-muted-foreground -mt-1">
            Ce nombre représente le nombre de type de produit acheté, par
            exemple 3 pomme = 1 produit, la pomme.
          </p>
          {productTotalPurchased}
        </Data>
        <Data className="gap-0" label="Nombre total d'articles' acheté">
          <p className="text-sm text-muted-foreground -mt-1">
            Ce nombre représente le nombre d'article acheté sans tenir compte du
            type, par exemple 3 pommes et 2 oranges = 5 articles.
          </p>
          {itemsTotalPruchased}
        </Data>
        <Data label="Date de la dernière commande">
          {format(lastOrderDate, 'dd/MM/yyyy')}
        </Data>
      </Container>
      <SheetFooter className="justify-self-end self-stretch grow-0">
        <SheetClose asChild>
          <Button fullWidth variant={'outline'}>
            Fermer
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button asChild variant={'default'}>
            <Link
              className="flex justify-center items-center gap-4 w-full"
              params={{ id: id.toString() }}
              to={'/customer/:id'}
            >
              Voir plus <ArrowUpRightFromSquare className="h-4 w-4" />
            </Link>
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  )
}

export default Overview
