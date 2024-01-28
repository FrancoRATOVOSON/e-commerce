'use client'

import React from 'react'

import { Link } from '@/components'
import { Button, Price } from 'ui'
import { getRandomPrice } from 'utils/faker'

export default function CartFooter() {
  return (
    <footer
      className={`
    fixed bottom-0 bg-light-bg-low dark:bg-dark-bg-low 
    h-fit w-full right-0 left-0
    flex justify-center items-center
    `}
    >
      <div className="flex flex-col items-center justify-between h-32 py-2 w-128">
        <div className="flex flex-row items-center justify-between w-full">
          <p>Votre total:</p>
          <p>
            <Price value={getRandomPrice()} />
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 px-10 text-center">
          <Button className="w-full">Valider le panier</Button>
          <p>
            Ou <Link href={'/'}>continuer le shopping</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
