import React, { memo, useState } from 'react'

import { XCircleIcon } from '@/Icons'
import Skeleton from '@/shadcn/skeleton'
import { TagChipActionType, TagChipSizeType, TagChipThemeType } from '@/types'
import { VariantProps, cva } from 'class-variance-authority'

const tagChipStyle = cva(
  [
    'font-medium whitespace-nowrap text-nowrap text-light-text-high',
    'flex flex-row justify-between items-center gap-2',
    'py-1 px-3 rounded-lg'
  ],
  {
    compoundVariants: [
      {
        action: ['None', 'Removable'],
        class: 'pointer-events-none hover:pointer-events-none'
      }
    ],
    defaultVariants: {
      action: 'None',
      size: 'Normal',
      theme: 'Base'
    },
    variants: {
      action: {
        None: '',
        Removable: '',
        Toggle: 'cursor-pointer'
      },
      size: {
        Normal: 'text-base',
        Small: 'text-sm'
      },
      theme: {
        Base: [
          'bg-light-cp-base on-dark:bg-dark-cp-base',
          'hover:bg-light-cp-hover dark-hover:bg-dark-cp-hover',
          'aria-selected:bg-light-cp-active on-dark:aria-selected:bg-dark-cp-active'
        ],
        Error: [
          'bg-light-err-cp-base on-dark:bg-dark-err-cp-base',
          'hover:bg-light-err-cp-hover dark-hover:bg-dark-err-cp-hover',
          'aria-selected:bg-light-err-cp-active on-dark:aria-selected:bg-dark-err-cp-active'
        ],
        Infos: [
          'bg-light-info-cp-base on-dark:bg-dark-info-cp-base',
          'hover:bg-light-info-cp-hover dark-hover:bg-dark-info-cp-hover',
          'aria-selected:bg-light-info-cp-active on-dark:aria-selected:bg-dark-info-cp-active'
        ],
        Success: [
          'bg-light-sucs-cp-base on-dark:bg-dark-sucs-cp-base',
          'hover:bg-light-sucs-cp-hover dark-hover:bg-dark-sucs-cp-hover',
          'aria-selected:bg-light-sucs-cp-active on-dark:aria-selected:bg-dark-sucs-cp-active'
        ],
        Warning: [
          'bg-light-warn-cp-base on-dark:bg-dark-warn-cp-base',
          'hover:bg-light-warn-cp-hover dark-hover:bg-dark-warn-cp-hover',
          'aria-selected:bg-light-warn-cp-active on-dark:aria-selected:bg-dark-warn-cp-active'
        ]
      }
    }
  }
)

interface TagChipProps extends VariantProps<typeof tagChipStyle> {
  action?: TagChipActionType
  className?: string
  initialState?: boolean
  label: string
  onClick?: (state: boolean) => void
  onRemove?: () => void
  size?: TagChipSizeType
  theme?: TagChipThemeType
}

export default function TagChip({
  action = 'None',
  className = '',
  initialState = false,
  label,
  onClick = () => {},
  onRemove = () => {},
  size = 'Normal',
  theme = 'Base'
}: TagChipProps) {
  const [state, setState] = useState<boolean>(initialState)

  return (
    <div
      aria-selected={state}
      className={tagChipStyle({ action, className, size, theme })}
      onClick={() => {
        if (action === 'Toggle') {
          onClick(state)
          setState(!state)
        }
      }}
    >
      <span>{label}</span>
      {action === 'Removable' && (
        <span
          onClick={() => {
            if (action === 'Removable') {
              onRemove()
              setState(false)
            }
          }}
        >
          <XCircleIcon
            className={`
          pointer-events-auto cursor-pointer 
          hover:text-light-text-low dark:hover:text-dark-text-low
          `}
            size={size === 'Normal' ? 22 : 16}
          />
        </span>
      )}
    </div>
  )
}

export const TagChipSkeleton = memo(() => (
  <Skeleton className="w-16 h-8 rounded-lg" />
))
