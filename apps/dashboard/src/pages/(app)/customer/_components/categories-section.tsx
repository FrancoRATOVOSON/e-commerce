import React from 'react'

import { ShopperDetails } from 'database/types'
import {
  Badge,
  Button,
  CardContainer,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Container
} from 'ui/components'
import { ChevronDown, ChevronRight } from 'ui/icons'
import { cn } from 'ui/utils'

import { PriceDisplay } from '../../_components'
import { useFormatShopperDetails } from '../_hooks'
import { SectionType } from '../_lib'

type TagCardProps = { className?: string; label: string } & SectionType

function TagCard({ amount, className, label, quantity }: TagCardProps) {
  return (
    <Container
      className={cn(
        'flex flex-row justify-between items-center p-1',
        className
      )}
    >
      <Badge label={label} />
      <div className="text-right">
        <p className="text-sm font-semibold">{quantity}</p>
        <p className="text-xs text-muted-foreground">
          <PriceDisplay value={amount} />
        </p>
      </div>
    </Container>
  )
}

type CategoryCardProps = {
  className?: string
  isOpen: boolean
  label: string
  onOpenChange: (open: boolean) => void
  tags: Map<string, SectionType>
} & SectionType

function CategoryCard({
  amount,
  className,
  isOpen,
  label,
  onOpenChange,
  quantity,
  tags: tagsMap
}: CategoryCardProps) {
  const tags = Array.from(tagsMap.entries())
  return (
    <CardContainer
      className={cn('min-w-64 p-4', className, isOpen && 'grow h-full')}
    >
      <Collapsible
        className="h-full flex flex-col justify-start items-stretch gap-4"
        onOpenChange={onOpenChange}
        open={isOpen}
      >
        <CollapsibleTrigger asChild>
          <Button
            className="flex flex-row justify-between items-center"
            fullWidth
            variant={'ghost'}
          >
            <div className="grow-0 flex flex-row justify-start items-center gap-3">
              <span>
                {isOpen ? (
                  <ChevronDown className="size-4" />
                ) : (
                  <ChevronRight className="size-4" />
                )}
              </span>
              <span>{label}</span>
            </div>
            <div className="grow-1 text-right">{quantity}</div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className={cn(isOpen && 'grow')}>
          <Container className="flex flex-col justify-start items-stretch gap-2">
            {tags.map(([tagLabel, tag], index) => (
              <TagCard
                key={tagLabel}
                label={tagLabel}
                {...tag}
                className={cn(index % 2 === 0 && 'bg-muted/50')}
              />
            ))}
          </Container>
        </CollapsibleContent>
        <div
          className={cn(
            'text-right flex justify-end items-center justify-self-end'
          )}
        >
          Total : <PriceDisplay value={amount} />
        </div>
      </Collapsible>
    </CardContainer>
  )
}

interface CategoriesSectionProps {
  className?: string
  details: ShopperDetails
}

export default function CategoriesSection({
  className,
  details
}: CategoriesSectionProps) {
  const orders = useFormatShopperDetails(details)
  const [isOpen, setIsOpen] = React.useState(false)
  const categories = Array.from(orders.categories.entries())

  return (
    <Container
      className={cn(
        'flex flex-col justify-start items-stretch gap-2',
        className
      )}
    >
      <div>
        <Button
          className="flex flex-row justify-start items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
          variant={'secondary'}
        >
          <span>
            {isOpen ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
          </span>
          <span>{`${isOpen ? 'Fermer' : 'Ouvrir'} les détails sur les catégories`}</span>
        </Button>
      </div>
      <Container
        className={cn(
          'flex flex-col justify-start items-stretch gap-2',
          'md:grid md:grid-cols-2',
          'lg:grid-cols-3',
          'xl:grid-cols-3',
          '2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:last:grow-0'
        )}
      >
        {categories.map(([label, category]) => (
          <CategoryCard
            className="self-start"
            isOpen={isOpen}
            key={label}
            label={label}
            onOpenChange={setIsOpen}
            {...category}
          />
        ))}
      </Container>
    </Container>
  )
}
