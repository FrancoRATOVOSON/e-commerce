import React from 'react'

import {
  CardContainer,
  CardContent,
  CardHeader,
  CardTitle,
  Price
} from 'ui/components'
import { IconNode } from 'ui/icons'
import { cn } from 'ui/utils'
import { PriceDetails } from 'utils/types'

interface InfoTileProps {
  className?: string
  icon: IconNode
  label: string
  value: PriceDetails | number | string
}

export default function InfoTile({
  className,
  icon: Icon,
  label,
  value
}: InfoTileProps) {
  return (
    <CardContainer
      className={cn(
        className,
        'p-6 space-y-4 grow shrink basis-auto max-[1366px]:last:grow-0'
      )}
    >
      <CardHeader className="p-0 flex flex-row justify-between items-start gap-2 space-y-0">
        <CardTitle className="font-medium text-sm whitespace-nowrap tracking-normal">
          {label}
        </CardTitle>
        <div className="text-muted-foreground">
          <Icon size={18} />
        </div>
      </CardHeader>
      <CardContent className="text-xl font-semibold p-0 whitespace-nowrap">
        {typeof value === 'string' || typeof value === 'number' ? (
          value
        ) : (
          <Price currency={value.currency} value={value.value} />
        )}
      </CardContent>
    </CardContainer>
  )
}
