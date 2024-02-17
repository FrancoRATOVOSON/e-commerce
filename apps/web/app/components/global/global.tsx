'use client'

import React from 'react'

import { useHydrateUserConnexionState } from '@/stores'
import { Toaster } from 'ui/components'

import Themer from '../themer'

interface GlobalProps {
  children: React.ReactNode
  isUserConnected: boolean
}

export default function Global({ children, isUserConnected }: GlobalProps) {
  useHydrateUserConnexionState(isUserConnected)

  return (
    <>
      <Themer>
        <Toaster />
        {children}
      </Themer>
    </>
  )
}
