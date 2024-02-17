'use client'

import React, { Suspense } from 'react'

import { productModal } from '@/(home)/lib'
import { DialogContextProvider } from 'ui/components'

import ProductModal from '../productModal'
import CardListSkeleton from './cardListSkeleton'

export default function CardListWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DialogContextProvider context={productModal}>
      <ProductModal />
      <Suspense fallback={<CardListSkeleton />}>{children}</Suspense>
    </DialogContextProvider>
  )
}
