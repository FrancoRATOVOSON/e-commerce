import { useState } from 'react'

import { Slider } from '@/components'

interface SliderContainerProps {
  defaultValues?: [number, number]
  max?: number
  min?: number
  minStepsBetweenThumbs?: number
  step?: number
}

const SliderContainer = ({
  defaultValues = [25, 75],
  max = 100,
  min = 0,
  minStepsBetweenThumbs = 1,
  step = 1
}: SliderContainerProps) => {
  const [values, setValues] = useState<[number, number]>(defaultValues)

  return (
    <div className="flex flex-col items-stretch w-full gap-1 mx-40">
      <Slider
        defaultValue={defaultValues}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={value => setValues(value as [number, number])}
        step={step}
        value={values}
      />
      <div className="flex flex-row justify-between">
        <p>{values[0]}</p>
        <p>{values[1]}</p>
      </div>
    </div>
  )
}

export default (
  <SliderContainer
    defaultValues={[100_000, 1_000_000]}
    max={2_000_000}
    min={10_000}
    minStepsBetweenThumbs={5}
    step={1000}
  />
)
