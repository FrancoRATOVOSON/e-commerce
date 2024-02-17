import React from 'react'

import { Page } from '@/components'
import { Container, DatePickerWithRange } from 'ui/components'
import { cn } from 'ui/utils'
import { today, yearFromNow } from 'utils'

import { InfoTiles } from './_components'

export default function Overview() {
  return (
    <Page className="flex flex-col justify-start items-center p-6 space-y-6">
      <Container>
        <h1>Accueil</h1>
        <DatePickerWithRange
          defaultValues={{ from: yearFromNow(-1), to: today() }}
        />
      </Container>
      <Container>
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
        <Container className="flex flex-rox justify-between items-start space-x-4">
          {/* Chart */}
          <div className="flex flex-col justify-start items-stretch">
            {/* Lists */}
          </div>
        </Container>
      </Container>
    </Page>
  )
}
