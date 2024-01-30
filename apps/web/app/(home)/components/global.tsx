'use client'

import React from 'react'

import { DialogContextProvider } from 'ui'

import { alertModal } from '../lib'
import Header from './header'

export default function Global({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <DialogContextProvider context={alertModal}>
        {children}
      </DialogContextProvider>
    </>
  )
}
