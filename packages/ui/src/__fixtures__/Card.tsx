import { Card } from '@/components'
import { getProductCardInfos } from 'utils/faker'

export default {
  Normal: <Card product={getProductCardInfos()} />,
  Small: <Card product={getProductCardInfos()} size="Small" />
}
