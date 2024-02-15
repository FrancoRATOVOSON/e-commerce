import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { AppLogo } from '@/components'

const LOGIN = 'Se connecter'
const SIGNUP = `S'inscrire`

export default function AuthLayout() {
  const pathName = useLocation().pathname

  const bottomText =
    pathName === '/login' ? `Si vous êtes nouveau, préférez ` : `Déjà membre ? `
  const pageLabel = pathName === '/login' ? LOGIN : SIGNUP
  const pageAction = pathName === '/login' ? SIGNUP : LOGIN

  return (
    <div
      className={`
    flex flex-col items-center justify-between 
    w-full h-full gap-16 mt-16 overflow-hidden
    `}
    >
      <div className="flex items-center justify-center w-full">
        <AppLogo />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-start gap-10">
          <h1 className="text-2xl font-medium">{pageLabel}</h1>
          <Outlet />
          <p>
            {bottomText}
            <Link href={pathName === '/login' ? '/signup' : '/login'}>
              {pageAction}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
