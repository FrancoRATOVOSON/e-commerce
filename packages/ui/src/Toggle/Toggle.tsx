'use client'
import React, { useState } from 'react'

interface ToggleProps {
  initialState?: boolean
  children: React.ReactNode
  className?: string | ((state:boolean) => string)
  onToggle?: (state:boolean) => void
}

export default function Toggle({
  initialState=false,
  children,
  className='',
  onToggle
}:ToggleProps) {
  const [isActive, toggle] = useState<boolean>(initialState)

  return (
    <button
    className={`${typeof className === "string" ? className : className(isActive)}`}
    onClick={() => {
      onToggle && onToggle(isActive)
      toggle(!isActive)
    }}>
      {children}
    </button>
  )
}
