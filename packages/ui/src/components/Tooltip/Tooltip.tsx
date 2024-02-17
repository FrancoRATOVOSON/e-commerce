import * as React from 'react'

import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger
} from '../../shadcn/tooltip'

interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive> {
  content: React.ReactNode
  side?: 'bottom' | 'left' | 'right' | 'top'
}

function Tooltip({ children, content, side = 'top', ...props }: TooltipProps) {
  return (
    <TooltipPrimitive {...props}>
      <TooltipTrigger className="w-fit h-fit">{children}</TooltipTrigger>
      <TooltipContent side={side}>{content}</TooltipContent>
    </TooltipPrimitive>
  )
}

export { Tooltip, TooltipProvider }
