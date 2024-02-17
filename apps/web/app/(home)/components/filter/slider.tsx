'use client'

import React, { useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Price, Slider as SliderComponent } from 'ui/components'
import { useDebouncedCallback } from 'use-debounce'

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
  paramsKey: string
  sliderValues: SliderComponentProps
}

function Slider({
  Displayer,
  className = '',
  onChange,
  paramsKey,
  sliderValues: { defaultValue, max, min, minStepsBetweenThumbs, step }
}: SliderProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue)

  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const pathName = usePathname()
  const { replace } = useRouter()

  const onValueChange = useDebouncedCallback((value: [number, number]) => {
    const minKey = `${paramsKey}_min`
    const maxKey = `${paramsKey}_max`

    const [minValue, maxValue] = value

    if (minValue === min) params.delete(minKey)
    else params.set(minKey, minValue.toString())

    if (maxValue === max) params.delete(maxKey)
    else params.set(maxKey, maxValue.toString())

    replace(`${pathName}?${params.toString()}`)
  }, 300)

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
          onValueChange(value as [number, number])
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
  defaultValue: [10_000, 1_000_000],
  max: 1_000_000,
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
      paramsKey="price"
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
      paramsKey="discount"
      sliderValues={sliderValues}
    />
  )
}
