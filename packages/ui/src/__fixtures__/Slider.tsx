import { useState } from 'react'
import { Slider } from '@/components'

interface SliderContainerProps {
  min?: number
  max?: number
  defaultValues?: [number, number]
  step?: number
  minStepsBetweenThumbs?: number
}

const SliderContainer = ({
  defaultValues = [25, 75],
  min = 0,
  max = 100,
  step = 1,
  minStepsBetweenThumbs = 1
}: SliderContainerProps) => {
  const [values, setValues] = useState<[number, number]>(defaultValues)

  return (
    <div className="flex flex-col items-stretch w-full gap-1 mx-40">
      <Slider
        defaultValue={defaultValues}
        min={min}
        max={max}
        step={step}
        onValueChange={value => setValues(value)}
        value={values}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
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
    min={10_000}
    max={2_000_000}
    defaultValues={[100_000, 1_000_000]}
    step={1000}
    minStepsBetweenThumbs={5}
  />
)
