import { getProductCardInfos } from 'utils/faker'

import { InteractiveCard, InteractiveCardSkeleton } from '../components'

export default {
  Component: (
    <InteractiveCard actionLabel="Action" product={getProductCardInfos()} />
  ),
  Skeleton: <InteractiveCardSkeleton />
}
