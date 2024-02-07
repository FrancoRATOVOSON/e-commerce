import { getProductCardInfos } from 'utils/faker'

import { Card } from '../components'

export default {
  Normal: <Card product={getProductCardInfos()} />,
  Small: <Card product={getProductCardInfos()} size="Small" />
}
