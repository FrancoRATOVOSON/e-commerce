import * as React from 'react'

import { VariantProps } from 'class-variance-authority'

import { Badge as PrimitiveBadge, badgeVariants } from '../../shadcn/badge'
import Skeleton from '../../shadcn/skeleton'
import { cn, cva } from '../../utils'

const badgeColors = cva('', {
  defaultVariants: {
    theme: 'default'
  },
  variants: {
    theme: {
      default: '',
      error: 'bg-error-foreground',
      success: 'bg-success-foreground'
    }
  }
})

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof badgeVariants>,
    VariantProps<typeof badgeColors> {
  label: string
}

function Badge({
  className,
  label,
  size,
  theme,
  variant,
  ...props
}: BadgeProps) {
  return (
    <PrimitiveBadge
      className={cn(badgeColors({ className, theme }))}
      size={size}
      variant={variant}
      {...props}
    >
      {label}
    </PrimitiveBadge>
  )
}

const BadgeSkeleton = React.memo(
  ({ size }: VariantProps<typeof badgeVariants>) => (
    <Skeleton
      className={cn(
        size === 'normal' && 'h-7',
        size === 'large' && 'h-8',
        size === 'sm' && 'h-6',
        'w-16'
      )}
    />
  )
)

interface BadgeListProps extends Omit<BadgeProps, 'label'> {
  emptyMessage?: string
  labels: string[]
}

function BadgeList({
  className,
  emptyMessage = 'No item found',
  labels,
  size,
  variant,
  ...props
}: BadgeListProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-row justify-start items-center space-x-2 w-full overflow-auto no-scrollbar py-1',
        className
      )}
    >
      {labels.length > 0 ? (
        labels.map(label => (
          <Badge key={label} label={label} size={size} variant={variant} />
        ))
      ) : (
        <span className="font-medium italic text-muted-foreground">
          {emptyMessage}
        </span>
      )}
    </div>
  )
}

const BadgeListSkeleton = React.memo(
  ({ size }: VariantProps<typeof badgeVariants>) => (
    <div>
      <BadgeSkeleton size={size} />
      <BadgeSkeleton size={size} />
      <BadgeSkeleton size={size} />
    </div>
  )
)

export { Badge, BadgeList, BadgeListSkeleton, BadgeSkeleton }
