import React from 'react'
import { AdjustmentsHorizontalIcon, Toggle } from 'ui'
import Slider from './slider'

interface FilterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

const FilterSection = ({
  label,
  children,
  className,
  ...props
}:FilterSectionProps) => {
  return (
    <div
    className={`
    ${className ?? ''}
    flex flex-col justify-start items-stretch gap-2
    `}
    {...props}>
      <p className='font-medium'>{label}</p>
      {children}
    </div>
  )
}

export default function Filter() {
  return (
    <div
    className={`
    flex flex-col gap-6 basis-72 grow-0 shrink-0
    p-4 rounded-md h-fit border border-light-bg-lower bg-light-bg-lower
    dark:bg-dark-bg-lower dark:border-none
    `}>
      <Toggle
      onToggle={async () => {'use server'}}
      className={
        `flex flex-row gap-4 border border-black rounded-md p-2 w-fit
        hover:text-sld-base hover:border-sld-base
        dark:border-white hover:dark:border-sld-base`
      }>
        <AdjustmentsHorizontalIcon/>
        <p>Filtrer</p>
      </Toggle>
      <div className='flex flex-col items-stretch justify-start w-full gap-6 text-sm'>
        <FilterSection label='Par prix :'><Slider/></FilterSection>
        <FilterSection label='Par catégories :'><Slider/></FilterSection>
        <FilterSection label='Par tags :'><Slider/></FilterSection>
        <FilterSection label='Par réductions :'><Slider/></FilterSection>
      </div>
    </div>
  )
}
