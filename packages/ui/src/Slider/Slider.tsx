'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import styles from './Slider.module.css'

interface SliderProps extends SliderPrimitive.SliderProps {
  defaultValue?: [number, number]
  onValueChange?: (values:[number, number]) => void
}

export default function Slider({
  defaultValue=[25,75],
  className,
  min=0,
  max=100,
  step=1,
  ...props
}:SliderProps) {

  return (
    <SliderPrimitive.Root
    className={`${styles.root} ${className}`}
    defaultValue={defaultValue}
    min={min}
    max={max}
    step={step}
    {...props}>
      <SliderPrimitive.Track className={`${styles.track}`}>
        <SliderPrimitive.Range className={`${styles.range}`}/>
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={`${styles.thumb}`}/>
      <SliderPrimitive.Thumb className={`${styles.thumb}`}/>
    </SliderPrimitive.Root>
  )
}
