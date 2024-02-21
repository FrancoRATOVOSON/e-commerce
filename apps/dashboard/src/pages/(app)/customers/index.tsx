import React from 'react'

import { HeaderDescription, HeaderTitle, Page } from '@/components'
import { useSetHeader } from '@/hooks'
import { Container, ControlledSheet } from 'ui/components'

import { DataList } from './_components'

export default function Customer() {
  const setHeader = useSetHeader()

  setHeader({
    children: (
      <Container className="flex flex-col justify-start grow ml-4">
        <HeaderTitle title="Vos Clients" />
        <HeaderDescription
          className="text-nowrap"
          description="Analysez et gérez vos clients"
        />
      </Container>
    )
  })

  return (
    <Page className="flex justify-start items-stretch flex-auto p-6">
      <DataList className="mb-6" />
      <ControlledSheet />
    </Page>
  )
}
