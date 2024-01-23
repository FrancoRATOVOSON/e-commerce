'use client'

import React from 'react'
import {
  Button,
  Search
} from 'ui'
import { ShoppingCartIcon } from 'ui/icons'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import ToggleTheme from './toggleTheme'
import UserIconButton from './userIconButton'
import { AppLogo, Link } from '@/components'

export default function Header() {
  const pathName = usePathname()
  const router = useRouter()

  const MiddleElement = () => {
    if (pathName === '/') return <Search className='w-96' placeholder='Recherche...'/>
    if (pathName === '/cart') return <h1 className='text-2xl font-medium'>Votre panier</h1>
    return null
  }

  return (
    <ThemeProvider attribute='class'>
      <header
      className={
        `flex flex-row justify-between items-center py-6 px-6 sticky top-0 z-50 
        bg-light-bg-low dark:bg-dark-bg-low dark:shadow-md dark:shadow-dark-bg-low mb-6`
      }>
        <div>
          <AppLogo/>
        </div>
        <MiddleElement/>
        <div
        className={
          `flex flex-row justify-end gap-6 items-center`
        }>
          <Button type='Secondary' onClick={() => router.push('/login')}>
            Se connecter
          </Button>
          <UserIconButton className='hidden'/>
          <ToggleTheme/>
          {pathName !== '/cart' && (
            <Link
            href='/cart'
            contentType='icon'>
              <ShoppingCartIcon/>
            </Link>
          )}
        </div>
      </header>
    </ThemeProvider>
  )
}
