import React from 'react'
import {
  AppLogo,
  Button,
  Search
} from 'ui'
import ToggleTheme from './toggleTheme'
import IconButton from '../common/iconButton'
import UserIconButton from './userIconButton'
import { ShoppingCartIcon } from 'ui/icons'

export default function Header() {
  return (
    <header
    className={
      `flex flex-row justify-between items-center py-6 px-6`
    }>
      <div>
        <AppLogo className='fill-light-text-high dark:fill-dark-text-high' scale={0.4}/>
      </div>
      <Search className='w-96' placeholder='Recherche...'/>
      <div
      className={
        `flex flex-row justify-end gap-6 items-center`
      }>
        <Button type='Secondary'>Se connecter</Button>
        <UserIconButton className='hidden'/>
        <IconButton><ShoppingCartIcon/></IconButton>
        <ToggleTheme/>
      </div>
    </header>
  )
}
