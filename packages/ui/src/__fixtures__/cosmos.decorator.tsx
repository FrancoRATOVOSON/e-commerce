import React from 'react'

import { MoonIcon, SunIcon } from '../Icons'
import { Theme, useTheme } from '../utils'

import 'style-config/style.css'

const ThemeButton = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    console.log(theme)
    if (!theme || theme !== 'dark') setTheme('dark')
    else setTheme('light')
  }
  return (
    <button
      className="flex items-center justify-center w-10 h-10"
      onClick={() => toggleTheme()}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ({ children }: { children: React.ReactNode }) => (
  <Theme>
    <div
      className={`
    flex flex-col w-screen h-screen gap-8
    `}
    >
      <div>
        <ThemeButton />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  </Theme>
)
