'use client'

import React, { useEffect } from 'react'
import {
  AppLogo,
  Button,
  Search
} from 'ui'
import { ShoppingCartIcon } from 'ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ToggleTheme from './toggleTheme'
import UserIconButton from './userIconButton'

export default function Header() {
  const pathName = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  },[])

  const MiddleElement = () => {
    if (pathName === '/') return <Search className='w-96' placeholder='Recherche...'/>
    if (pathName === '/cart') return <h1 className='text-2xl font-medium'>Votre panier</h1>
    return null
  }

  return (
    <header
    className={
      `flex flex-row justify-between items-center py-6 px-6 sticky top-0 z-50 
      bg-light-bg-low dark:bg-dark-bg-low dark:shadow-md dark:shadow-dark-bg-low mb-6`
    }>
      <div>
        <Link href={'/'}>
          <AppLogo className='fill-light-text-high dark:fill-dark-text-high' scale={0.4}/>
        </Link>
      </div>
      <MiddleElement/>
      <div
      className={
        `flex flex-row justify-end gap-6 items-center`
      }>
        <Button type='Secondary'>Se connecter</Button>
        <UserIconButton className='hidden'/>
        <ToggleTheme/>
        {pathName !== '/cart' && (
          <Link
          href='/cart'
          className='transition text-inherit hover:text-sld-base w-fit h-fit'>
            <ShoppingCartIcon/>
          </Link>
        )}
      </div>
    </header>
  )
}
