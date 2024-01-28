import { getTagsList } from 'utils/faker'

import { Badge, BadgeList } from '../components'

const BadgeListContainer = ({ labels }: { labels: string[] }) => (
  <div className="w-64">
    <BadgeList labels={labels} />
  </div>
)

export default {
  'Default Large': <Badge label="badge" size="large" />,
  'Default Normal': <Badge label="badge" />,
  'Default Small': <Badge label="badge" size="sm" />,
  Destructive: <Badge label="badge" variant={'destructive'} />,
  'List Empty': <BadgeListContainer labels={[]} />,
  'List Full': <BadgeListContainer labels={getTagsList()} />,
  Outline: <Badge label="badge" variant={'outline'} />,
  Secondary: <Badge label="badge" variant={'secondary'} />
}
