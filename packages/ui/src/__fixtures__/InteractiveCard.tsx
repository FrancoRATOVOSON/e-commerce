import { getProductCardInfos } from 'utils/faker'
import { InteractiveCard, InteractiveCardSkeleton } from '@/components'

export default {
  Component: (
    <InteractiveCard product={getProductCardInfos()} actionLabel="Action" />
  ),
  Skeleton: <InteractiveCardSkeleton />
}
