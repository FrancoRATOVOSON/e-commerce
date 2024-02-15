import { buttonVariants } from '../../components/Button'
import { VariantProps, cva } from '../../utils'
import Link from './link'

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

type LinkProps = VariantProps<typeof linkVariants>

export { Link, type LinkProps, linkVariants }
