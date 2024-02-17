/* eslint-disable perfectionist/sort-union-types */
/* eslint-disable perfectionist/sort-objects */
import { LinkTypes } from 'ui/components'
import { Home, Package, Settings, Users } from 'ui/icons'

type Pages = 'overview' | 'customers' | 'products' | 'settings'

const pageList: Record<Pages, LinkTypes> = {
  overview: {
    Icon: Home,
    href: '/overview',
    label: 'Accueil'
  },
  customers: {
    Icon: Users,
    href: '/customers',
    label: 'Clients'
  },
  products: {
    Icon: Package,
    href: '/products',
    label: 'Produits'
  },
  settings: {
    Icon: Settings,
    href: '/settings',
    label: 'Paramètres'
  }
}

const navLinks: LinkTypes[] = Object.values(pageList)

export { navLinks, pageList }
