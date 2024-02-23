import React from 'react'

import { HeaderDescription, HeaderTitle, Page } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'
import { getFromShopperCache } from '@/lib'
import { useParams } from '@/router'
import { Container } from 'ui/components'

import { OverviewCard } from './_components'

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
        <Container className="flex flex-col justify-start items-start grow-0 ml-4">
          <HeaderTitle title={shopper.login} />
          <HeaderDescription
            className="text-nowrap"
            description={`Client numéro : ${shopper.id}`}
          />
        </Container>
      )
    })
    setWindowTitle(base => `${base} - Client`)
  }, [])

  return (
    <Page className="p-6">
      <Container>
        <OverviewCard {...shopper} />
      </Container>
    </Page>
  )
}
