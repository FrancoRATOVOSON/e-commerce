'use client'

import React from 'react'

import { Button } from 'ui'
import { MoonIcon, SunIcon } from 'ui/icons'
import { useTheme } from 'ui/utils'

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
