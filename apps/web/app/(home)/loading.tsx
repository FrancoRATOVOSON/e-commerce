import React from 'react'
import { CardListSkeleton } from './components'

export default function Loading() {
  return (
    <div className="z-10 flex flex-row items-stretch justify-between px-6 gap-x-10">
      <div className='skeleton w-80 h-96'/>
      <CardListSkeleton/>
    </div>
  )
}
