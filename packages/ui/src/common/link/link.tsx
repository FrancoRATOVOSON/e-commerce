import React from 'react'

import { buttonVariants } from '../../components'
import { VariantProps, cn, cva } from '../../utils'

const linkVariants = cva('transition', {
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      button: buttonVariants({ variant: 'primary' }),
      default:
        ' text-sld-base hover:underline underline-offset-4 hover:text-dark-sld-hover',
      icon: buttonVariants({ size: 'icon', variant: 'ghost' }),
      logo: 'text-inherit h-fit'
    }
  }
})

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {
  element?: React.JSX.ElementType
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, element, variant, ...props }, ref) => {
    const Element = element || 'a'

    return (
      <Element
        className={cn(linkVariants({ className, variant }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Link.displayName = 'Link'

export default Link
