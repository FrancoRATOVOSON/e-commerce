import * as React from 'react'

import { IconNode } from '../../Icons'
import { VariantProps, cn, cva } from '../../utils'
import { Tooltip, TooltipProvider } from '../Tooltip'
import { NavLink } from './NavLink'

const navStyle = cva('flex justify-start', {
  defaultVariants: {
    orientation: 'vertical'
  },
  variants: {
    orientation: {
      horizontal: 'flex-row items-center space-x-1',
      vertical: 'flex-col items-start space-y-1'
    }
  }
})

type LinkTypes = {
  Icon?: IconNode
  href: string
  label: string
}

interface NavProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navStyle> {
  isCollapsed?: boolean
  links: Array<LinkTypes>
  pathName?: string
  linkElement?: (_: {
    [key: string]: unknown
    href: string
  }) => React.JSX.Element
}

function Nav({
  className,
  isCollapsed = false,
  linkElement,
  links,
  orientation,
  pathName,
  ...props
}: NavProps) {
  const Link = linkElement || 'a'

  return (
    <TooltipProvider delayDuration={100}>
      <nav
        className={cn(
          navStyle({ className, orientation }),
          orientation === 'vertical' && isCollapsed && 'items-center'
        )}
        {...props}
      >
        {links.map(({ Icon, href, label }) => {
          const Wrapper = isCollapsed
            ? ({ children: chld }: { children: React.ReactNode }) => (
                <Tooltip content={label} side="right">
                  {chld}
                </Tooltip>
              )
            : ({ children: chld }: { children: React.ReactNode }) => <>{chld}</>

          return (
            <Wrapper key={href}>
              <NavLink
                className={cn(
                  orientation === 'vertical' && !isCollapsed && 'w-full'
                )}
                dataLink={pathName === href ? 'on' : 'off'}
                key={href}
                variant={isCollapsed ? 'icon' : 'nav'}
              >
                <Link href={href}>
                  {Icon && (
                    <div>
                      <Icon size={20} />
                    </div>
                  )}
                  {!isCollapsed && <span>{label}</span>}
                </Link>
              </NavLink>
            </Wrapper>
          )
        })}
      </nav>
    </TooltipProvider>
  )
}

export { type LinkTypes, Nav }
