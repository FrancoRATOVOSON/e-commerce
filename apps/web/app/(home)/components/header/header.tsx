'use client'

import React from 'react'

import { AppLogo, Link } from '@/components'
import { useIsUserConnected } from '@/stores'
import { usePathname } from 'next/navigation'
import { Search } from 'ui'
import { ShoppingCartIcon } from 'ui/icons'
import { cn } from 'ui/utils'

import ToggleTheme from './toggleTheme'
import UserIconButton from './userIconButton'

export default function Header() {
  const pathName = usePathname()
  const isConnected = useIsUserConnected()

  const MiddleElement = () => {
    if (pathName === '/')
      return <Search className="w-96" placeholder="Recherche..." />
    if (pathName === '/cart')
      return <h1 className="text-2xl font-medium">Votre panier</h1>
    return null
  }

  return (
    <header
      className={cn([
        'flex flex-row justify-between items-center py-6 px-6 sticky top-0 z-10 mb-6',
        'bg-background'
      ])}
    >
      <div>
        <AppLogo />
      </div>
      <MiddleElement />
      <div className={`flex flex-row justify-end space-x-3 items-center`}>
        {!isConnected ? (
          <Link href={'/login'} variant={'button'}>
            Se connecter
          </Link>
        ) : (
          <UserIconButton />
        )}
        <ToggleTheme />
        {pathName !== '/cart' && (
          <Link href="/cart" variant="icon">
            <ShoppingCartIcon />
          </Link>
        )}
      </div>
    </header>
  )
}
