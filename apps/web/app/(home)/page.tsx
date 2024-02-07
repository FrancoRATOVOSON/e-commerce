import { Metadata } from 'next'

import { AlertModal, CardList, CardListWrapper, Filter } from './components'

export const metadata: Metadata = {
  description: 'Shop better',
  title: 'YShop'
}

interface PageSearchParams {
  category?: string | string[]
  discount_max?: string
  discount_min?: string
  price_max?: string
  price_min?: string
  tag?: string | string[]
}

export default function Web({
  searchParams
}: {
  searchParams: PageSearchParams
}) {
  const {
    category,
    discount_max: discountMax,
    discount_min: discountMin,
    price_max: priceMax,
    price_min: priceMin,
    tag
  } = searchParams

  return (
    <div className="flex flex-row items-stretch justify-between px-6 gap-x-10">
      <AlertModal />
      <Filter category={category} />
      <CardListWrapper>
        <CardList
          category={category}
          discount={{ max: discountMax, min: discountMin }}
          price={{ max: priceMax, min: priceMin }}
          tag={tag}
        />
      </CardListWrapper>
    </div>
  )
}
