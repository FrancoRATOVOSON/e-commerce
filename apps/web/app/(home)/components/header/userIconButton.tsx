'use client'

import React, { useState } from 'react'

import { logOut } from '@/lib'
import { useUserConnectionState } from '@/stores'
import { useRouter } from 'next/navigation'
import { Button } from 'ui'
import { UserIcon } from 'ui/icons'

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
        <UserIcon />
      </Button>
      <div
        className={`
      absolute z-10 top-12 w-48 h-24
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
            router.refresh()
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
