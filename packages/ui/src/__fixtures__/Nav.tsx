import { Package, PieChart, Settings, Users } from '../Icons'
import { type LinkTypes, Nav } from '../components'

const icons = [PieChart, Users, Package, Settings]

const textLinks: LinkTypes[] = [
  {
    href: '#',
    label: 'Chart'
  },
  {
    href: '#',
    label: 'Customers'
  },
  {
    href: '#',
    label: 'Products'
  },
  {
    href: '#',
    label: 'Settings'
  }
]

const iconLinks: LinkTypes[] = textLinks.map((link, i) => ({
  ...link,
  Icon: icons[i]
}))

export default {
  Collapsed: <Nav className="w-56" isCollapsed links={iconLinks} />,
  Horizontal: <Nav links={textLinks} orientation={'horizontal'} />,
  Vertical: <Nav className="w-56" links={iconLinks} />
}
