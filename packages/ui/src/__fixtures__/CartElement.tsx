import { fakeProductData } from 'database/faker'

import { CartElement, CartElementSkeleton } from '../components'

export default {
  Component: <CartElement product={fakeProductData()} quantity={3} />,
  Skeleton: <CartElementSkeleton />
}
