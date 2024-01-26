import { memo } from 'react'

interface PriceProps {
  currency?: string
  value: number
}

const Price = memo(({ currency = 'MGA', value }: PriceProps) => (
  <>
    {new Intl.NumberFormat('fr-FR', {
      currency,
      style: 'currency'
    }).format(value)}
  </>
))

export default Price
