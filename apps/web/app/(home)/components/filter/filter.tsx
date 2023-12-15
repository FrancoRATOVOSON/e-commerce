import React, { Suspense } from 'react'
import { PercentageSlider, PriceSlider } from './slider'
import FilterSection from './filterSection'
import CategoriesList from './categoriesList'
import TagsList from './tagsList'


export default function Filter() {
  
  return (
    <div
    className={`
    flex flex-col gap-6 basis-72 grow-0 shrink-0 max-w-xs
    p-4 rounded-md h-fit border border-light-bg-lower bg-light-bg-lower
    dark:bg-dark-bg-lower dark:border-none sticky top-32
    `}>
      <p className='text-2xl font-semibold'>Filtrer</p>
      <div className='flex flex-col items-stretch justify-start w-full gap-6 text-sm'>
        <FilterSection label='Par prix :'><PriceSlider/></FilterSection>
        <Suspense>
          <CategoriesList/>
        </Suspense>
        <Suspense>
          <TagsList/>
        </Suspense>
        <FilterSection label='Par réductions :'><PercentageSlider/></FilterSection>
      </div>
    </div>
  )
}
