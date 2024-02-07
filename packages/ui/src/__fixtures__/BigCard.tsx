import { getProductPageInfos } from 'utils/faker'

import { BigCard, BigCardSkeleton } from '../components'

export default {
  Component: <BigCard product={getProductPageInfos()} />,
  Skeleton: <BigCardSkeleton />
}
