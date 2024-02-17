import * as React from 'react'

import {
  ImperativePanelHandle,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../shadcn/resizable'
import Separator from '../../shadcn/separator'
import { cn } from '../../utils'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn('w-full', className)} {...props} ref={ref} />
))

export {
  Container,
  type ImperativePanelHandle as ControllablePanelHandle,
  ResizableHandle as PanelResizeHandle,
  ResizablePanel as Panel,
  ResizablePanelGroup as LayoutGroup,
  Separator
}
