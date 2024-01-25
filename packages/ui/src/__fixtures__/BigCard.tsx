import { BigCard, BigCardSkeleton } from '@/components'
import { getProductPageInfos } from 'utils/faker'

export default {
  Component: <BigCard product={getProductPageInfos()} />,
  Skeleton: <BigCardSkeleton />
}
