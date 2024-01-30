'use client'

import React, { useState } from 'react'

import { Price, Slider as SliderComponent } from 'ui'

interface SliderComponentProps {
  defaultValue: [number, number]
  max: number
  min: number
  minStepsBetweenThumbs: number
  step: number
}

interface SliderProps {
  Displayer: ({ value }: { value: number }) => React.ReactElement
  className?: string
  onChange?: (values: [number, number]) => void
  sliderValues: SliderComponentProps
}

function Slider({
  Displayer,
  className = '',
  onChange,
  sliderValues: { defaultValue, max, min, minStepsBetweenThumbs, step }
}: SliderProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue)

  return (
    <div className={`${className} flex flex-col w-full space-y-1`}>
      <SliderComponent
        defaultValue={defaultValue}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={value => {
          setValues(value as [number, number])
          onChange && onChange(value as [number, number])
        }}
        step={step}
        value={values}
      />
      <div className="flex flex-row justify-between font-light">
        <p>
          <Displayer value={values[0]} />
        </p>
        <p>
          <Displayer value={values[1]} />
        </p>
      </div>
    </div>
  )
}

const PRICE_SLIDER_DEFAULT: SliderComponentProps = {
  defaultValue: [10_000, 3_000_000],
  max: 3_000_000,
  min: 10_000,
  minStepsBetweenThumbs: 5,
  step: 1_000
}

export function PriceSlider({
  className = '',
  onChange,
  sliderValues = PRICE_SLIDER_DEFAULT
}: Partial<Omit<SliderProps, 'Displayer'>>) {
  return (
    <Slider
      Displayer={({ value }) => <Price value={value} />}
      className={className}
      onChange={onChange}
      sliderValues={sliderValues}
    />
  )
}

const PERCENTAGE_SLIDER_DEFAULT: SliderComponentProps = {
  defaultValue: [0, 100],
  max: 100,
  min: 0,
  minStepsBetweenThumbs: 1,
  step: 1
}

export function PercentageSlider({
  className = '',
  onChange,
  sliderValues = PERCENTAGE_SLIDER_DEFAULT
}: Partial<Omit<SliderProps, 'Displayer'>>) {
  return (
    <Slider
      Displayer={({ value }) => <>{`${value} %`}</>}
      className={className}
      onChange={onChange}
      sliderValues={sliderValues}
    />
  )
}
