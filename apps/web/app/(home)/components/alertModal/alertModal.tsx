'use client'

import React from 'react'

import { alertModal } from '@/(home)/lib'
import { Dialog } from 'ui'

import NotConnectedAlert from './notConnectedAlert'

export default function AlertModal() {
  return (
    <Dialog context={alertModal}>
      <NotConnectedAlert />
    </Dialog>
  )
}
