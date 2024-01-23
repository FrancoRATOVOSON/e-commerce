'use client'

import React from 'react'
import { MoonIcon, SunIcon } from 'ui/icons'
import { useTheme } from 'next-themes'
import { IconButton } from '@/components'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (!theme || theme !== 'dark') setTheme('dark')
    else setTheme('light')
  }

  return (
    <IconButton
    className="flex items-center justify-center w-10 h-10"
    onClick={() => toggleTheme()}>
      {
        !theme || theme !== 'dark' ? <SunIcon /> : <MoonIcon />
      }
    </IconButton>
  )
}
