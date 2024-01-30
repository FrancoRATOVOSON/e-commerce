import * as React from 'react'

import { VariantProps, cn, cva } from '../../utils'
import Button from '../Button'

interface AlertTitleProps {
  children: React.ReactNode
}

function AlertTitle({ children }: AlertTitleProps) {
  return <p className="font-semibold text-lg">{children}</p>
}

interface AlertDescriptionProps {
  children: React.ReactNode
}

function AlertDescription({ children }: AlertDescriptionProps) {
  return (
    <p className="font-normal text-sm group-[.destructive]:text-destructive/90">
      {children}
    </p>
  )
}

interface AlertHeaderProps {
  title: string
}

function AlertHeader({ title }: AlertHeaderProps) {
  return (
    <div className="flex flex-row justify-between items-start">
      <AlertTitle>{title}</AlertTitle>
    </div>
  )
}

interface AlertFooterProps {
  action: () => void
  actionLabel?: string
  cancelAction?: () => void
}

function AlertFooter({
  action,
  actionLabel = 'Confirmer',
  cancelAction
}: AlertFooterProps) {
  return (
    <div className="flex flex-row justify-end items-center space-x-4">
      {cancelAction && (
        <Button onClick={cancelAction} variant="secondary">
          Annuler
        </Button>
      )}
      <Button onClick={action}>{actionLabel}</Button>
    </div>
  )
}

export const alertStyle = cva('space-y-3 group', {
  compoundVariants: [
    {
      className: 'border-destructive',
      intent: 'destructive',
      outline: 'bordered'
    }
  ],
  defaultVariants: {
    intent: 'default',
    outline: 'naked'
  },
  variants: {
    intent: {
      default: 'intent',
      destructive: 'destructive text-destructive'
    },
    outline: {
      bordered: 'bordered border rounded-sm',
      naked: 'naked border-none'
    }
  }
})

interface AlertProps
  extends AlertHeaderProps,
    Partial<AlertFooterProps>,
    VariantProps<typeof alertStyle> {
  Icon?: React.ReactNode
  children?: React.ReactNode
  description?: string
}

export default function Alert({
  Icon,
  action,
  actionLabel,
  cancelAction,
  children,
  description,
  intent,
  outline,
  title
}: AlertProps) {
  return (
    <div className={cn('p-3', alertStyle({ intent, outline }))}>
      <div className={cn('flex flex-row justify-start space-x-3')}>
        {Icon && <div className="h-full mt-1">{Icon}</div>}
        <div className="space-y-0">
          <AlertHeader title={title} />
          {description && <AlertDescription>{description}</AlertDescription>}
        </div>
      </div>
      {children && <div>{children}</div>}
      {action && (
        <AlertFooter
          action={action}
          actionLabel={actionLabel}
          cancelAction={cancelAction}
        />
      )}
    </div>
  )
}
