import React, { useCallback, useMemo, useState } from 'react'
import { XCircleIcon } from '../Icons'
import styles from './TagChip.module.css'
import { TagChipActionType, TagChipSizeType, TagChipThemeType } from '../../types'

interface TagChipProps {
  label: string
  action?: TagChipActionType
  theme?: TagChipThemeType
  size?: TagChipSizeType
  initialState?: boolean
  onClick?: (state:boolean) => void
  onRemove?: () => void
}

export default function TagChip({
  label, action='None', theme='Base', size='Normal',
  initialState=false,
  onClick=()=>{}, onRemove=()=>{}
}:TagChipProps) {
  const [state, setState] = useState<boolean>(initialState)

  const themeStyle = useMemo(() => styles[theme.toLowerCase()],[theme])

  return (
    <div
    className={`
    py-1 px-3 rounded-lg font-medium flex flex-row justify-between items-center gap-2
    ${action === 'Toggle' ? 'cursor-pointer' : ''}
    ${size ===  'Normal' ? 'text-base' : 'text-sm'}
    ${themeStyle}
    ${action !== 'Toggle' ? 'pointer-events-none hover:pointer-events-none' : ''}
    `}
    onClick={() => {
      if (action === 'Toggle') {
        onClick(state)
        setState(!state)
      }
    }}
    aria-selected={state}>
      <span>{label}</span>
      {
        action === 'Removable' &&
        <span onClick={() => {
          if (action === 'Removable') {
            onRemove()
            setState(false)
          }
        }}>
          <XCircleIcon
          className={`
          pointer-events-auto cursor-pointer
          hover:text-light-text-low dark-hover:text-dark-text-low
          `}
          size={size === 'Normal' ? 22 : 16}/>
        </span>
      }
    </div>
  )
}
