import * as React from 'react'

import { IconNode } from '../../Icons'
import { VariantProps, cn, cva } from '../../utils'
import { Link } from '../Link'
import { Tooltip, TooltipProvider } from '../Tooltip'

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
  linkElement?: React.JSX.ElementType
  links: Array<LinkTypes>
  pathName?: string
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
              <Link
                className={cn(
                  orientation === 'vertical' && !isCollapsed && 'w-full'
                )}
                data-link={pathName === href ? 'on' : 'off'}
                element={linkElement}
                href={href}
                key={href}
                variant={isCollapsed ? 'icon' : 'nav'}
              >
                {Icon && (
                  <div>
                    <Icon size={20} />
                  </div>
                )}
                {!isCollapsed && <span>{label}</span>}
              </Link>
            </Wrapper>
          )
        })}
      </nav>
    </TooltipProvider>
  )
}

export { type LinkTypes, Nav }
