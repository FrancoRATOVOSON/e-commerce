import React from 'react'
import {
  MagnifyingGlassIcon as MGlass,
  AdjustmentsHorizontalIcon as AdjustmentsH,
  UserIcon as Usr,
  ShoppingCartIcon as ShoppingCart,
  SunIcon as Sun,
  MoonIcon as Moon,
  XCircleIcon as XCircle,
  XMarkIcon as XMark
} from '@heroicons/react/24/solid'

type IconType = typeof MGlass

interface IconProps {
  size?: number
  className?: string
}

interface IconTemplateProps {
  size?: number
  className?: string
  Icon: IconType
}

const IconTemplate = ({
  Icon,
  size=24,
  className=''
}:IconTemplateProps) => <Icon height={size} width={size} className={className}/>

export const MagnifyingGlassIcon = (props:IconProps) => (
  <IconTemplate Icon={MGlass} {...props}/>
)

export const AdjustmentsHorizontalIcon = (props:IconProps) => (
  <IconTemplate Icon={AdjustmentsH} {...props}/>
)

export const UserIcon = (props:IconProps) => (
  <IconTemplate Icon={Usr} {...props}/>
)

export const ShoppingCartIcon = (props:IconProps) => (
  <IconTemplate Icon={ShoppingCart} {...props}/>
)

export const SunIcon = (props:IconProps) => (
  <IconTemplate Icon={Sun} {...props}/>
)

export const MoonIcon = (props:IconProps) => (
  <IconTemplate Icon={Moon} {...props}/>
)

export const XCircleIcon = (props:IconProps) => (
  <IconTemplate Icon={XCircle} {...props}/>
)

export const XMarkIcon = (props:IconProps) => (
  <IconTemplate Icon={XCircle} {...props}/>
)