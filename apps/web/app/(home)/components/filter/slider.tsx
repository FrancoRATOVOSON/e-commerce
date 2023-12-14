'use client'

import React, { useState } from 'react'
import { Price, Slider as SliderComponent } from 'ui'

interface SliderComponentProps {
  defaultValue: [number,number]
  min: number
  max: number
  step: number
  minStepsBetweenThumbs: number
}

interface SliderProps {
  className?: string
  onChange?: (values:[number,number]) => void
  Displayer: ({value}:{value:number}) => React.ReactElement
  sliderValues: SliderComponentProps
}

function Slider({
  className='',
  Displayer,
  onChange,
  sliderValues: {defaultValue, min, max, step, minStepsBetweenThumbs}
}:SliderProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue)

  return (
    <div className={`${className} flex flex-col w-full`}>
      <SliderComponent
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      onValueChange={value => {
        setValues(value)
        onChange && onChange(value)
      }}
      value={values}/>
      <div className="flex flex-row justify-between font-light">
        <p><Displayer value={values[0]}/></p>
        <p><Displayer value={values[1]}/></p>
      </div>
    </div>
  )
}

const PRICE_SLIDER_DEFAULT:SliderComponentProps = {
  defaultValue: [100_000, 2_500_000],
  min: 10_000,
  max: 3_000_000,
  step: 1_000,
  minStepsBetweenThumbs: 5
}

export function PriceSlider({
  className='',
  onChange,
  sliderValues=PRICE_SLIDER_DEFAULT
}:Partial<Omit<SliderProps, 'Displayer'>>) {
  return (
    <Slider
    sliderValues={sliderValues}
    Displayer={({value}) => <Price value={value}/>}
    className={className}
    onChange={onChange}/>
  )
}

const PERCENTAGE_SLIDER_DEFAULT:SliderComponentProps = {
  defaultValue: [25, 75],
  min: 0,
  max: 100,
  step: 1,
  minStepsBetweenThumbs: 1
}

export function PercentageSlider({
  className='',
  onChange,
  sliderValues=PERCENTAGE_SLIDER_DEFAULT
}:Partial<Omit<SliderProps, 'Displayer'>>) {
  return (
    <Slider
    sliderValues={sliderValues}
    Displayer={({value}) => (<>{`${value} %`}</>)}
    className={className}
    onChange={onChange}/>
  )
}
