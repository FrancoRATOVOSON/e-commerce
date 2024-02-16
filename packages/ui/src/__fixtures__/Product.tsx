import { fakeProductData } from 'database/faker'

import {
  InteractiveProductCard,
  InteractiveProductSkeleton,
  LargeProductSkeleton,
  ProductCard
} from '../components'

export default {
  Default: <ProductCard product={fakeProductData()} />,
  Interactive: (
    <InteractiveProductCard buttonLabel="Action" product={fakeProductData()} />
  ),
  'Interactive Skeleton': <InteractiveProductSkeleton />,
  Large: <ProductCard product={fakeProductData()} size="large" />,
  'Large Skeleton': <LargeProductSkeleton />,
  Small: <ProductCard product={fakeProductData()} size="sm" />
}
