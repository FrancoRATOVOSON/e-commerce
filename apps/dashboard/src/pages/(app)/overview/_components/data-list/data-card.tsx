import React from 'react'

import { Price } from 'ui/components'
import { cn } from 'ui/utils'
import { PriceDetails } from 'utils/types'

interface DataCardProps {
  className?: string
  description: string
  title: string
  value: PriceDetails | number | string
}

const DataCard = React.memo(
  ({ className, description, title, value }: DataCardProps) => {
    const Value = React.useMemo(
      () =>
        typeof value === 'string' || typeof value === 'number' ? (
          value
        ) : (
          <Price currency={value.currency} value={value.value} />
        ),
      [value]
    )

    return (
      <div
        className={cn(
          className,
          'flex flex-row justify-between items-start gap-6'
        )}
      >
        <div className="flex flex-col justify-start items-start">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="font-semibold tracking-normal">{Value}</div>
      </div>
    )
  }
)

export default DataCard
