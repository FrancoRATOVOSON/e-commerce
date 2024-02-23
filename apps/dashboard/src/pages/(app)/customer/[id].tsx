import React from 'react'

import { HeaderDescription, HeaderTitle, Page } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'
import { getFromShopperCache } from '@/lib'
import { Link, Navigate, useParams } from '@/router'
import { Button, Container } from 'ui/components'
import { ArrowLeft } from 'ui/icons'

import { CategoriesSection, OverviewCard } from './_components'
import { useFetchShopperDetails } from './_hooks'

export default function Customer() {
  const setWindowTitle = useSetWindowTitle()
  const setHeader = useSetHeader()
  const shopperId = Number.parseInt(useParams('/customer/:id').id, 10)
  const shopper = getFromShopperCache(shopperId)
  const details = useFetchShopperDetails(shopperId)

  if (!shopper) return <Navigate to={'/customers'} />

  React.useEffect(() => {
    setHeader({
      children: (
        <Container className="flex flex-row justify-start items-start">
          <Button asChild size={'icon'} variant={'ghost'}>
            <Link to={'/customers'}>
              <div>
                <ArrowLeft size={16} />
              </div>
            </Link>
          </Button>
          <Container className="flex flex-col justify-start items-start grow-0 ml-4">
            <HeaderTitle title={shopper.login} />
            <HeaderDescription
              className="text-nowrap"
              description={`Client numéro : ${shopper.id}`}
            />
          </Container>
        </Container>
      )
    })
    setWindowTitle(base => `${base} - Client`)
  }, [])

  return (
    <Page className="px-6 pb-10 pt-2 flex flex-col justify-start items-stretch gap-6">
      <Container>
        <OverviewCard {...shopper} />
      </Container>
      <CategoriesSection details={details} />
    </Page>
  )
}
