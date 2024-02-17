'use client'

import React from 'react'

import { DialogContextProvider } from 'ui/components'

import { alertModal } from '../lib'
import Header from './header'

export default function Global({ children }: { children: React.ReactNode }) {
  return (
    <DialogContextProvider context={alertModal}>
      <Header />
      {children}
    </DialogContextProvider>
  )
}
