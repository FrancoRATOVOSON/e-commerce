import * as React from 'react'

import { AppLogo } from '@/components'

import { Decorator } from './components'

export default function RegisteringLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`
    flex flex-col items-center justify-between 
    w-full h-full gap-16 mt-16 overflow-hidden
    `}
    >
      <div className="flex items-center justify-center w-full">
        <AppLogo />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Decorator>{children}</Decorator>
      </div>
    </div>
  )
}
