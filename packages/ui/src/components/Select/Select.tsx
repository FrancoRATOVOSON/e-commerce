import * as React from 'react'

import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../../shadcn/select'

type SelectElementType = {
  label?: string
  value: string
}

type SelectGroupType = {
  [key: string]: {
    label?: null | string
    options: SelectElementType[]
  }
}

interface SelectControllerProps
  extends React.ComponentProps<typeof SelectTrigger> {
  placeholder?: string
}

function SelectController({ placeholder, ...props }: SelectControllerProps) {
  return (
    <SelectTrigger {...props}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
  )
}

interface SelectProps extends React.ComponentProps<typeof SelectComponent> {
  options: Array<SelectElementType> | SelectGroupType
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  side?: 'bottom' | 'left' | 'right' | 'top'
}

function Select({
  children,
  options,
  placeholder,
  position = 'item-aligned',
  side = 'bottom',
  ...props
}: SelectProps) {
  const data: SelectGroupType = Array.isArray(options)
    ? { group: { label: null, options } }
    : options

  return (
    <SelectComponent {...props}>
      {children || (
        <SelectTrigger className="w-44">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      )}
      <SelectContent position={position} side={side}>
        {Object.entries(data).map(([key, { label, options: opt }]) => (
          <SelectGroup key={label || key}>
            {label && <SelectLabel>{label}</SelectLabel>}
            {opt.map(({ label: display, value }) => (
              <SelectItem key={value} value={value}>
                {display || value}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </SelectComponent>
  )
}

export {
  Select,
  SelectController,
  type SelectElementType,
  type SelectGroupType
}
