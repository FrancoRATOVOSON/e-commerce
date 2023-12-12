import * as SliderPrimitive from '@radix-ui/react-slider'

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

  const SliderThumb = () => (
    <SliderPrimitive.Thumb
    className={`
    block w-5 h-5 rounded-full shadow-md shadow-black-30 focus:outline-none transition-all
    bg-black on-dark:bg-white on-dark:shadow-white-10 hover:scale-105 hover:bg-light-sld-hover
    `}/>
  )

  return (
    <SliderPrimitive.Root
    className={`
    relative flex items-center select-none touch-none w-full h-5 
    ${className ?? ''}`}
    defaultValue={defaultValue}
    min={min}
    max={max}
    step={step}
    {...props}>
      <SliderPrimitive.Track
      className={`relative grow rounded-full h-1 bg-black-30 on-dark:bg-white-30`}>
        <SliderPrimitive.Range
        className={`absolute rounded-full h-full bg-black-70 on-dark:bg-white-70`}/>
      </SliderPrimitive.Track>
      <SliderThumb/>
      <SliderThumb/>
    </SliderPrimitive.Root>
  )
}
