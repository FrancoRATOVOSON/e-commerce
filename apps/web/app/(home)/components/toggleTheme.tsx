'use client'

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from 'ui'

export default function ToggleTheme() {
  const [dark, toggleDark] = useState<boolean>(false)

  const toggleTheme = () => {
    if (!dark)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    toggleDark(!dark)
  }

  return (
    <button
    className="flex items-center justify-center w-10 h-10"
    onClick={() => toggleTheme()}>
      {
        dark ? <MoonIcon /> : <SunIcon />
      }
    </button>
  )
}
