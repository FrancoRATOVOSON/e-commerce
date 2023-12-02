import React from 'react'
import {
  Button,
  Search,
  ShoppingCartIcon,
  UserIcon
} from 'ui'

export default function Header() {
  return (
    <header
    className={
      `flex flex-row justify-between items-center py-6 px-6`
    }>
      <h1>YShop</h1>
      <Search placeholder='Recherche...'/>
      <div
      className={
        `flex flex-row justify-end gap-6 items-center`
      }>
        <Button type='Secondary'>Se connecter</Button>
        <UserIcon/>
        <ShoppingCartIcon/>
      </div>
    </header>
  )
}
