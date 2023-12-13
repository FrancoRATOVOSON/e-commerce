import { memo } from "react"

interface PriceProps {
  currency?:string
  value:number
}

const Price = memo(function({currency='MGA', value}:PriceProps) {
  return (
    <>
      {
        new Intl.NumberFormat(
          'fr-FR',
          {
            style: 'currency',
            currency: currency
          }
        ).format(value)
      }
    </>
  )
})

export default Price