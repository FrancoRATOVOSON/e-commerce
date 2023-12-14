'use client'

import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'ui/icons'
import IconButton from '../iconButton/iconButton'

export default function ToggleTheme() {
  const [dark, toggleDark] = useState<boolean>(false)

  useEffect(() => {
    if(document.documentElement.classList.contains('dark')) toggleDark(true)
  }, [])

  const toggleTheme = () => {
    if (!dark)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    toggleDark(!dark)
  }

  return (
    <IconButton
    className="flex items-center justify-center w-10 h-10"
    onClick={() => toggleTheme()}>
      {
        dark ? <MoonIcon /> : <SunIcon />
      }
    </IconButton>
  )
}
