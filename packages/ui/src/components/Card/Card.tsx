import * as React from 'react'

import { IconNode } from '../../Icons'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as Container
} from '../../shadcn/card'
import { VariantProps, cn, cva } from '../../utils'

const cardStyle = cva('', {
  defaultVariants: {
    size: 'normal'
  },
  variants: {
    size: {
      large: 'text-2xl',
      normal: 'text-base',
      small: 'font-medium'
    }
  }
})

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyle> {
  Icon?: IconNode

  description?: string
  footer?: React.ReactNode
  title: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { Icon, children, className, description, footer, size, title, ...props },
    ref
  ) => (
    <Container className={className} ref={ref} {...props}>
      <CardHeader
        className={cn(
          'flex flex-row justify-between items-start',
          Icon && 'space-y-0'
        )}
      >
        <div>
          <CardTitle className={cn(cardStyle({ size }))}>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {Icon && (
          <div className="w-fit h-fit ml-4 text-muted-foreground">
            <Icon size={18} />
          </div>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Container>
  )
)

Card.displayName = 'CardComponent'

export default Card
