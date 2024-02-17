'use client'

import React from 'react'

import { InteractiveProductSkeleton } from 'ui/components'

export default function CardListSkeleton() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full">
      {[1, 2, 3, 4, 5].map(n => (
        <InteractiveProductSkeleton key={n} />
      ))}
    </div>
  )
}
