import React from 'react'

import { VariantProps, cn, cva } from '../../utils'

const indicatorStyle = cva('size-4 rounded-full w-4 h-4', {
  defaultVariants: {
    state: 'success'
  },
  variants: {
    state: {
      error: 'bg-error-foreground',
      success: 'bg-success-foreground'
    }
  }
})

interface IndicatorProps extends VariantProps<typeof indicatorStyle> {
  className?: string
}

export default function Indicator({ className, state }: IndicatorProps) {
  return <div className={cn(indicatorStyle({ className, state }))} />
}
