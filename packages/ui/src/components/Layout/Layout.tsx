import * as React from 'react'

import {
  ImperativePanelHandle,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../shadcn/resizable'
import Separator from '../../shadcn/separator'
import { cn } from '../../utils'

type ContainerProps<T extends keyof React.JSX.IntrinsicElements = 'div'> = {
  as?: T
  children?: React.ReactNode
} & React.JSX.IntrinsicElements[T]

const ContainerComponent = <
  T extends keyof React.JSX.IntrinsicElements = 'div'
>(
  {
    as: Element = 'div' as T,
    children,
    className,
    ...props
  }: ContainerProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) =>
  React.createElement(
    Element,
    { ...props, className: cn('w-full', className), ref },
    children
  )

const Container = React.forwardRef(ContainerComponent)

export {
  Container,
  type ImperativePanelHandle as ControllablePanelHandle,
  ResizableHandle as PanelResizeHandle,
  ResizablePanel as Panel,
  ResizablePanelGroup as LayoutGroup,
  Separator
}
