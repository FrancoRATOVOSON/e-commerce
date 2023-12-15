import React from 'react'
import { PercentageSlider, PriceSlider } from './slider'
import TagList from './tagList'
import { getCategories, getTags } from '@/lib'

interface FilterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

const FilterSection = ({
  label,
  children,
  className,
  ...props
}:FilterSectionProps) => (
    <div
    className={`
    ${className ?? ''}
    flex flex-col justify-start items-stretch gap-1
    `}
    {...props}>
      <p className='font-medium'>{label}</p>
      {children}
    </div>
  )


export default async function Filter() {
  const categories = await getCategories()
  const tags = await getTags()
  
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
        <FilterSection label='Par catégories :'><TagList tags={categories}/></FilterSection>
        <FilterSection label='Par tags :'><TagList tags={tags}/></FilterSection>
        <FilterSection label='Par réductions :'><PercentageSlider/></FilterSection>
      </div>
    </div>
  )
}
