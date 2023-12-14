'use client'

import React, { useEffect } from 'react'

export default function Themer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  },[])

  return (<></>)
}
