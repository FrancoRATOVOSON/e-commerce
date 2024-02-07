import { faker } from '@faker-js/faker'

import { TagsList, TagsListSkeleton } from '../components'

function getTagsList(count: number): Array<string> {
  const list: Array<string> = []
  for (let index = 0; index < count; index += 1)
    list.push(faker.commerce.product())

  return list
}

const TagsListContainer = ({ count }: { count: number }) => (
  <div className="w-64">
    <TagsList tags={getTagsList(count).map(tag => ({ id: tag, value: tag }))} />
  </div>
)

export default {
  Component: <TagsListContainer count={5} />,
  Empty: <TagsListContainer count={0} />,
  Skeleton: <TagsListSkeleton />
}
