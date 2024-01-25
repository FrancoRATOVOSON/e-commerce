import { memo } from 'react'

interface PriceProps {
  currency?: string
  value: number
}

const Price = memo(({ currency = 'MGA', value }: PriceProps) => (
  <>
    {new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency
    }).format(value)}
  </>
))

export default Price
