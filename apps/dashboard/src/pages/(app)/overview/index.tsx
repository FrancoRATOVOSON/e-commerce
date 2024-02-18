import React from 'react'

import { Page } from '@/components'
import { Container, DatePickerWithRange } from 'ui/components'
import { cn } from 'ui/utils'
import { today, yearFromNow } from 'utils'

import { IncomeChart, InfoTiles } from './_components'
import { BestSalesList, BestShopperList } from './_components/data-list'

export default function Overview() {
  return (
    <Page className="flex flex-col justify-start items-center p-6 gap-8">
      <Container className="flex flex-row justify-between items-start">
        <h1 className="text-4xl font-bold tracking-tight">Accueil</h1>
        <DatePickerWithRange
          defaultValues={{ from: yearFromNow(-1), to: today() }}
        />
      </Container>
      <Container className="flex flex-col justify-start items-stretch gap-6">
        <Container
          className={cn(
            'gap-4',
            // ' flex flex-row flex-wrap justify-between items-start'
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
      </Container>
    </Page>
  )
}
