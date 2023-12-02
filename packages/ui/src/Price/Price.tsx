interface PriceProps {
  currency?:string
  value:number
}

export default function Price({currency='MGA', value}:PriceProps) {
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
}
