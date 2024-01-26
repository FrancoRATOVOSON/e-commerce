'use client'

import React from 'react'

import { IconButton } from '@/components'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'ui/icons'

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (!theme || theme !== 'dark') setTheme('dark')
    else setTheme('light')
  }

  return (
    <IconButton
      className="flex items-center justify-center w-10 h-10"
      onClick={() => toggleTheme()}
    >
      {!theme || theme !== 'dark' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
