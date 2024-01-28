'use client'

import React from 'react'

import { useTheme } from 'next-themes'
import { Button } from 'ui'
import { MoonIcon, SunIcon } from 'ui/icons'

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (!theme || theme !== 'dark') setTheme('dark')
    else setTheme('light')
  }

  return (
    <Button onClick={() => toggleTheme()} size="icon" variant={'ghost'}>
      {!theme || theme !== 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
