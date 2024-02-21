import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { navLinks } from '@/lib'
import { AppLogo, Button, Nav, Separator } from 'ui/components'
import { AppIcon, FoldHorizontal, UnfoldHorizontal } from 'ui/icons'
import { cn } from 'ui/utils'

interface NavBarProps {
  isCollapsed: boolean
  toggle: () => void
}

export default function NavBar({ isCollapsed, toggle }: NavBarProps) {
  const { pathname } = useLocation()

  return (
    <div
      className={cn(
        'h-full w-full flex flex-col justify-start items-start space-y-4',
        isCollapsed ? 'px-2 py-2' : 'px-4 py-4'
      )}
    >
      <div className="w-full flex justify-center items-center">
        {isCollapsed ? (
          <div className="w-fit h-fit">
            <AppIcon className="w-11 h-11" />
          </div>
        ) : (
          <AppLogo scale={0.4} />
        )}
      </div>
      <Separator />
      <Nav
        className="w-full"
        isCollapsed={isCollapsed}
        linkElement={({ href, ...props }) => <Link to={href} {...props} />}
        links={navLinks}
        orientation={'vertical'}
        pathName={pathname}
      />
      <Separator />
      <div className="w-full h-full self-stretch flex flex-col justify-end items-center">
        <Button
          className={cn(
            !isCollapsed && 'flex flex-row justify-start items-center space-x-4'
          )}
          fullWidth
          onClick={toggle}
          size={isCollapsed ? 'icon' : 'default'}
          variant={'outline'}
        >
          {isCollapsed ? (
            <div>
              <UnfoldHorizontal size={20} />
            </div>
          ) : (
            <>
              <div>
                <FoldHorizontal size={20} />
              </div>
              <span>Fermer</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
