import React, { useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

import 'style-config/style.css'

export default ({children}:{children:React.ReactNode}) => {
  const [dark, toggleDark] = useState<boolean>(document.documentElement.classList.contains('dark'))
  
  const toggleTheme = () => {
    if (!dark)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    toggleDark(!dark)
  }

  return (
    <div
    className={`
    flex flex-col w-screen h-screen gap-8
    `}>
      <div>
        <button
        className="flex items-center justify-center w-10 h-10"
        onClick={() => toggleTheme()}>
          {
            dark ? <MoonIcon /> : <SunIcon />
          }
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full">{children}</div>
    </div>
  )
}