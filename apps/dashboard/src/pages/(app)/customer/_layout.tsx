import React from 'react'
import { Outlet } from 'react-router-dom'

import { HeaderDescription, HeaderTitle, Page } from '@/components'
import { useSetHeader, useSetWindowTitle } from '@/hooks'
import { getFromShopperCache } from '@/lib'
import { Link, Navigate, useParams } from '@/router'
import { Button, Container } from 'ui/components'
import { ArrowLeft } from 'ui/icons'

import { CategoriesSection, OverviewCard } from './_components'
import { ShopperDetailsProvider } from './_contexts'

export default function Customer() {
  const setWindowTitle = useSetWindowTitle()
  const setHeader = useSetHeader()
  const shopperId = Number.parseInt(useParams('/customer/:id').id, 10)
  const shopper = getFromShopperCache(shopperId)

  if (!shopper) return <Navigate to={'/customers'} />

  setHeader({
    children: (
      <Container
        className="flex flex-row justify-start items-start bg-background"
        data-tauri-drag-region
      >
        <Button asChild size={'icon'} variant={'ghost'}>
          <Link to={'/customers'}>
            <div>
              <ArrowLeft size={16} />
            </div>
          </Link>
        </Button>
        <Container
          className="flex flex-col justify-start items-start grow-0 ml-4"
          data-tauri-drag-region
        >
          <HeaderTitle className="w-fit" title={shopper.login} />
          <HeaderDescription
            className="text-nowrap w-fit"
            description={`Client numéro : ${shopper.id}`}
          />
        </Container>
      </Container>
    )
  })
  setWindowTitle(base => `${base} - Client`)

  return (
    <ShopperDetailsProvider shopperId={shopperId}>
      <Page className="pt-6 flex flex-col justify-start items-stretch gap-6 bg-muted">
        <OverviewCard className="bg-background mx-6" {...shopper} />
        <CategoriesSection className="ml-4 mx-6 w-auto" />
        <Container className="bg-background border-t border-border">
          <Outlet />
        </Container>
      </Page>
    </ShopperDetailsProvider>
  )
}
