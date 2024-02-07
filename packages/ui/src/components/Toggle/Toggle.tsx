import React from 'react'

import { VariantProps } from 'class-variance-authority'

import { Toggle, toggleVariants } from '../../shadcn/toggle'
import {
  ToggleGroupItem,
  ToggleGroup as ToggleGroupPrimitive,
  type TogglePrimitiveRootType
} from '../../shadcn/toggle-group'
import { cn } from '../../utils'

interface ToggleGoupDatas {
  emptyMessage?: string
  initialState?: (current: string) => boolean
  data: Array<{
    display: React.ReactNode
    value: string
  }>
}

type ToggleGroupProps = ToggleGoupDatas &
  React.ComponentPropsWithoutRef<TogglePrimitiveRootType> &
  VariantProps<typeof toggleVariants>

const ToggleGroup = React.forwardRef<
  React.ElementRef<TogglePrimitiveRootType>,
  ToggleGroupProps
>(
  (
    {
      className,
      data,
      emptyMessage = 'No item found',
      initialState,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    const setInitialState = (value: string): 'off' | 'on' => {
      const state = initialState ? initialState(value) : false
      return state ? 'on' : 'off'
    }

    return (
      <div className="w-full overflow-auto no-scrollbar">
        <ToggleGroupPrimitive
          className={cn('justify-start', className)}
          ref={ref}
          size={size}
          variant={variant}
          {...props}
        >
          {data.length === 0 ? (
            <div className="font-medium italic text-muted-foreground">
              {emptyMessage}
            </div>
          ) : (
            data.map(element => (
              <ToggleGroupItem
                className="whitespace-nowrap"
                data-on={setInitialState(element.value)}
                key={element.value}
                value={element.value}
              >
                {element.display}
              </ToggleGroupItem>
            ))
          )}
        </ToggleGroupPrimitive>
      </div>
    )
  }
)

export { Toggle, ToggleGroup }
