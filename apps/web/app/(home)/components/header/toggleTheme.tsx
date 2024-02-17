'use client'

import React from 'react'

import { Button, useTheme } from 'ui/components'
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
