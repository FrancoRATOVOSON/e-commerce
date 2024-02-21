import React from 'react'

import { HeaderContent, Page } from '@/components'
import { useSetHeader } from '@/hooks'
import { Container, DatePickerWithRange } from 'ui/components'
import { cn } from 'ui/utils'
import { today, yearFromNow } from 'utils'

import { IncomeChart, InfoTiles } from './_components'
import { BestSalesList, BestShopperList } from './_components/data-list'

export default function Overview() {
  const setHeader = useSetHeader()

  const HeaderChildren = (
    <HeaderContent className="flex justify-center items-center">
      <DatePickerWithRange
        className="w-64"
        defaultValues={{ from: yearFromNow(-1), to: today() }}
      />
    </HeaderContent>
  )

  setHeader({
    children: HeaderChildren,
    title: 'Accueil'
  })

  return (
    <Page className="flex flex-col justify-start items-stretch gap-6 p-6">
      <Container
        className={cn(
          'gap-4',
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          'xl:flex flex-row flex-wrap justify-between items-start'
        )}
      >
        <InfoTiles />
      </Container>
      <Container
        className={cn(
          'flex flex-col-reverse justify-start items-stretch gap-4',
          'lg:flex-row lg:justify-between'
        )}
      >
        <IncomeChart className="w-full h-96 lg:h-full lg:grow" />
        <div className="flex flex-col justify-start items-stretch gap-4">
          <BestSalesList />
          <BestShopperList />
        </div>
      </Container>
    </Page>
  )
}
