'use client'

import React, { useState } from 'react'
import { Button } from 'ui'
import { UserIcon } from 'ui/icons'
import { IconButton } from '../common'

interface UserIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserIconButton({
  className='',
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
        <Button type='Secondary' className='w-fit'>Se déconnecter</Button>
      </div>
    </div>
  )
}
