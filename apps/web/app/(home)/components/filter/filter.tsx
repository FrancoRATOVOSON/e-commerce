import React, { Suspense } from 'react'

import CategoriesList from './categoriesList'
import FilterSection from './filterSection'
import { PercentageSlider, PriceSlider } from './slider'
import TagsList from './tagsList'

interface FilterProps {
  category?: string | string[]
}

export default function Filter({ category }: FilterProps) {
  return (
    <div
      className={`
    flex flex-col gap-6 basis-72 grow-0 shrink-0 max-w-xs
    p-4 rounded-md h-fit border border-border sticky top-32
    `}
    >
      <p className="text-2xl font-semibold">Filtrer</p>
      <div className="flex flex-col items-stretch justify-start w-full gap-6 text-sm">
        <FilterSection label="Par prix :">
          <PriceSlider />
        </FilterSection>
        <Suspense>
          <CategoriesList />
        </Suspense>
        <Suspense>
          <TagsList category={category} />
        </Suspense>
        <FilterSection label="Par réductions :">
          <PercentageSlider />
        </FilterSection>
      </div>
    </div>
  )
}
