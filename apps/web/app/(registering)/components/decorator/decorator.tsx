'use client'

import React from 'react'

import { Link } from '@/components'
import { usePathname } from 'next/navigation'

interface DecoratorProps {
  children: React.ReactNode
}

const LOGIN = 'Se connecter'
const SIGNUP = `S'inscrire`

export default function Decorator({ children }: DecoratorProps) {
  const pathName = usePathname()

  const bottomText =
    pathName === '/login' ? `Si vous êtes nouveau, préférez ` : `Déjà membre ? `
  const pageLabel = pathName === '/login' ? LOGIN : SIGNUP
  const pageAction = pathName === '/login' ? SIGNUP : LOGIN

  return (
    <div className="flex flex-col items-center justify-start gap-10">
      <h1 className="text-2xl font-medium">{pageLabel}</h1>
      {children}
      <p>
        {bottomText}
        <Link href={pathName === '/login' ? '/signup' : '/login'}>
          {pageAction}
        </Link>
      </p>
    </div>
  )
}
