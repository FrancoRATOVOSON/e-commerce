import React from 'react'
import { AdjustmentsHorizontalIcon, Toggle } from 'ui'
import Slider from './slider'

export default function Filter() {
  return (
    <div
    className='flex flex-col gap-6 p-4 border rounded-md h-fit w-80 border-dark'>
      <Toggle
      onToggle={async () => {'use server'}}
      className={
        `flex flex-row gap-4 text-dark border border-dark rounded-md p-2 w-fit
        hover:border-primary hover:text-primary`
      }>
        <AdjustmentsHorizontalIcon/>
        <p>Filtrer</p>
      </Toggle>
      <div className='text-sm'>
        <div>
          <p>Par prix :</p>
          <Slider/>
        </div>
      </div>
    </div>
  )
}
