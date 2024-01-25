'use client'

import * as React from 'react'

import { cn } from '@/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'

const thumbStyle = cn([
  'block h-5 w-5 rounded-full border-2 border-primary bg-background',
  'ring-offset-background transition-colors',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  'disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:bg-sld-base'
])

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue = [0], ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    defaultValue={defaultValue}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={thumbStyle} />
    {defaultValue.length > 1 &&
      defaultValue.map((_, index) =>
        index === 0 ? null : <SliderPrimitive.Thumb className={thumbStyle} />
      )}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
