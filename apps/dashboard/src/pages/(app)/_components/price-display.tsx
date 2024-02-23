import React from 'react'

import { Price } from 'ui/components'
import { PriceDetails } from 'utils/types'

interface PriceDisplayProps {
  value: PriceDetails | number
}

const PriceDisplay = ({ value }: PriceDisplayProps) => (
  <Price
    currency={typeof value === 'number' ? undefined : value.currency}
    value={typeof value === 'number' ? value : value.value}
  />
)

export default React.memo(PriceDisplay)
