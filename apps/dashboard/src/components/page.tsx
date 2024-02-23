import * as React from 'react'

import { useHeaderValue } from '@/hooks'
import { Container } from 'ui/components'
import { cn } from 'ui/utils'

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
        'w-full h-full overflow-y-auto overflow-x-hidden'
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

interface HeaderTitleProps {
  className?: string
  title: string
}

function HeaderTitle({ className, title }: HeaderTitleProps) {
  return (
    <h1 className={cn('text-3xl font-bold leading-none flex-none', className)}>
      {title}
    </h1>
  )
}

interface HeaderDescriptionProps {
  className?: string
  description: string
}

function HeaderDescription({ className, description }: HeaderDescriptionProps) {
  return (
    <p className={cn('text-lg font-normal text-muted-foreground', className)}>
      {description}
    </p>
  )
}

type PageHeaderProps = {
  className?: string
}

function PageHeader({ className }: PageHeaderProps) {
  const { children, title } = useHeaderValue()

  return (
    <Container
      as="header"
      className={cn(
        className,
        'flex flex-row justify-between items-center p-2'
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
        {title && <HeaderTitle className={cn('ml-4')} title={title} />}
        {children || null}
      </Container>

      <div className="flex-none self-start inline-block relative right-0 top-0">
        <WindowControls />
      </div>
    </Container>
  )
}

export { HeaderContent, HeaderDescription, HeaderTitle, Page, PageHeader }
