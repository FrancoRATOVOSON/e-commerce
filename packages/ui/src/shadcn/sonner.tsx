import * as React from 'react'

import { Toaster as Sonner } from 'sonner'

import { cn, useTheme } from '../utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      className="toaster group shadow-lg"
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        classNames: {
          actionButton: cn(
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            'group-[.success]:bg-success group-[.success]:text-success-foreground',
            'group-[.error]:bg-error group-[.error]:text-error-foreground'
          ),
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          default: 'group toast bg-background text-foreground border-border',
          description: cn(
            'group-[.toast]:text-muted-foreground',
            'group-[.success]:text-success-foreground'
          ),
          error:
            'group error bg-error text-error-foreground border-error-border',
          success:
            'group success bg-success text-success-foreground border-success-border'
        }
      }}
      {...props}
    />
  )
}

export { Toaster, type ToasterProps }
