'use client'

import React, { useState } from 'react'
import { Price, Slider as SliderComponent } from 'ui'

const DEFAULT_VALUES:[number, number] = [100_000, 2_500_000]
const MIN = 10_000
const MAX = 3_000_000
const STEP = 1_000
const MIN_STEP_BETWEEN_THUMBS = 5

interface SliderProps {
  className?: string
  onChange?: (values:[number,number]) => void
}

export default function Slider({className='', onChange}:SliderProps) {
  const [values, setValues] = useState<[number, number]>(DEFAULT_VALUES)

  return (
    <div className="flex flex-col items-stretch gap-1">
      <SliderComponent
      defaultValue={DEFAULT_VALUES}
      min={MIN}
      max={MAX}
      step={STEP}
      minStepsBetweenThumbs={MIN_STEP_BETWEEN_THUMBS}
      onValueChange={value => {
        setValues(value)
        onChange && onChange(value)
      }}
      value={values}/>
      <div className="flex flex-row justify-between">
        <p><Price value={values[0]}/></p>
        <p><Price value={values[1]}/></p>
      </div>
    </div>
  )
}
