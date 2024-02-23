import React from 'react'

import { HeaderDescription, HeaderTitle } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'
import { getFromShopperCache } from '@/lib'
import { useParams } from '@/router'
import { Container, Price } from 'ui/components'
import { format } from 'utils'

export default function Customer() {
  const setWindowTitle = useSetWindowTitle()
  const setHeader = useSetHeader()
  const shopperId = Number.parseInt(useParams('/customer/:id').id, 10)
  const shopper = getFromShopperCache(shopperId)

  if (!shopper)
    return (
      <Container className="flex justify-center items-center">
        <p className="text-3xl font-bold">{'404 Not found'}</p>
      </Container>
    )

  React.useEffect(() => {
    setHeader({
      children: (
        <Container className="flex flex-col justify-start grow ml-4">
          <HeaderTitle title={`${shopper.login}`} />
          <HeaderDescription
            className="text-nowrap"
            description="Analysez et gérez vos clients"
          />
        </Container>
      )
    })
    setWindowTitle(base => `${base} - Client`)
  }, [])

  return (
    <div>
      {Object.entries(shopper).map(([key, value]) => {
        let valueComponent

        if (value instanceof Date)
          valueComponent = <p>{format(value, 'dd/MM/yyyy')}</p>
        else if (typeof value !== 'object') valueComponent = <p>{value}</p>
        else
          valueComponent = (
            <p>
              <Price value={value.value} />
            </p>
          )

        return (
          <div key={key}>
            <p>{key} :</p>
            {valueComponent}
          </div>
        )
      })}
    </div>
  )
}
