import { Metadata } from 'next'

import { AlertModal, CardList, CardListWrapper, Filter } from './components'

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
    <div className="flex flex-row items-stretch justify-between px-6 gap-x-10">
      <AlertModal />
      <Filter category={category} />
      <CardListWrapper>
        <CardList category={category} tag={tag} />
      </CardListWrapper>
    </div>
  )
}
