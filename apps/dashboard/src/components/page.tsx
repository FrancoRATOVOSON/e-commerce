import * as React from 'react'

import { Container } from 'ui/components'
import { cn } from 'ui/utils'

import { useHeaderValue } from '@/pages/(app)/overview/_hooks'

import WindowControls from './window-controls'

interface PageProps {
  children: React.ReactNode
  className?: string
}
function Page({ children, className }: PageProps) {
  return (
    <div
      className={cn(
        className,
        'w-full h-full overflow-y-scroll overflow-x-hidden'
      )}
    >
      {children}
    </div>
  )
}

interface PageContentProps {
  children: React.ReactNode
  className?: string
}

function HeaderContent({ children, className }: PageContentProps) {
  return (
    <Container
      className={cn('flex justify-start items-center', className)}
      data-tauri-drag-region
    >
      {children}
    </Container>
  )
}

type PageHeaderProps = {
  className?: string
}

function PageHeader({ className }: PageHeaderProps) {
  const { children, title } = useHeaderValue()

  return (
    <Container
      className={cn(
        className,
        'flex flex-row justify-between items-center py-2 px-2'
      )}
      data-tauri-drag-region
    >
      <Container
        className={cn(
          'grow w-full',
          title && children && 'flex flex-row justify-start items-center'
        )}
        data-tauri-drag-region
      >
        {title && (
          <h1 className={cn('text-2xl font-bold leading-none flex-none ml-4')}>
            {title}
          </h1>
        )}
        {children || null}
      </Container>

      <div className="flex-none">
        <WindowControls />
      </div>
    </Container>
  )
}

export { HeaderContent, Page, PageHeader }
