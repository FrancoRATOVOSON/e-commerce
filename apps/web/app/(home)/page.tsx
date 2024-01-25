import { ProductModal } from '@/components'
import { Metadata } from 'next'

import { CardList, Filter } from './components'

export const metadata: Metadata = {
  description: 'Shop better',
  title: 'YShop'
}

interface PageSearchParams {
  category?: string | string[]
  tag?: string | string[]
}

export default function Web({
  searchParams
}: {
  searchParams: PageSearchParams
}) {
  const { category, tag } = searchParams

  return (
    <div className="z-10 flex flex-row items-stretch justify-between px-6 gap-x-10">
      <Filter category={category} />
      <CardList category={category} tag={tag} />
      <ProductModal />
    </div>
  )
}
