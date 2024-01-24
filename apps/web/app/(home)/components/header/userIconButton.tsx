'use client'

import React, { useState } from 'react'
import { Button } from 'ui'
import { UserIcon } from 'ui/icons'
import { IconButton } from '@/components'
import { logOut } from '@/lib'

interface UserIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onLogOut?: () => void
}

export default function UserIconButton({
  className='',
  onLogOut,
  ...props
}:UserIconButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false)

  return (
    <div
    className={`${className} relative flex items-center justify-center`}
    {...props}>
      <IconButton onClick={() => setClicked(!clicked)} ><UserIcon/></IconButton>
      <div
      className={`
      absolute z-10 top-12 w-48 h-24
      items-center justify-center p-3
      bg-light-bg-low dark:bg-dark-bg-lower
      shadow-md shadow-black-40 rounded-lg dark:shadow-sm
      ${clicked ? 'flex' : 'hidden'}
      `}>
        <Button variant='Secondary' className='w-fit' onClick={async () => {
          await logOut()
          onLogOut && onLogOut()
        }}>Se déconnecter</Button>
      </div>
    </div>
  )
}
