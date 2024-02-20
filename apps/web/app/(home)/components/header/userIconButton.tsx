'use client'

import React, { useState } from 'react'

import { logOut } from '@/lib'
import { useUserConnectionState } from '@/stores'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from 'ui/components'
import { User } from 'ui/icons'

interface UserIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onLogOut?: () => void
}

export default function UserIconButton({
  className = '',
  onLogOut,
  ...props
}: UserIconButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false)
  const router = useRouter()
  const pathName = usePathname()
  const { logout: setLogOut } = useUserConnectionState()

  return (
    <div
      className={`${className} relative flex items-center justify-center`}
      {...props}
    >
      <Button
        onClick={() => setClicked(!clicked)}
        size={'icon'}
        variant={'ghost'}
      >
        <div>
          <User />
        </div>
      </Button>
      <div
        className={`
      absolute top-12 w-48 h-24 mr-4
      items-center justify-center p-3
      bg-light-bg-low dark:bg-dark-bg-lower
      shadow-md shadow-black-40 rounded-lg dark:shadow-sm
      ${clicked ? 'flex' : 'hidden'}
      `}
      >
        <Button
          className="w-fit"
          onClick={async () => {
            await logOut()
            setLogOut()
            if (pathName !== '/') router.push('/')
            else router.refresh()
            onLogOut && onLogOut()
          }}
          variant="secondary"
        >
          Se déconnecter
        </Button>
      </div>
    </div>
  )
}
