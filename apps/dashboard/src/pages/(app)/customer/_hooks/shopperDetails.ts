import * as React from 'react'

import { ShopperDetails } from 'database/types'
import { OrderStatusType } from 'utils/types'
import { create } from 'zustand'

import { useShopperDetailsContext } from '../_contexts'

type DetailsFilterType = OrderStatusType.DONE | OrderStatusType.VALIDATED | null

type CurrentShopperDetailsState = {
  currentFilter: DetailsFilterType
  details: ShopperDetails
}

type CurrentShopperDetailsAction = {
  filter: (details: ShopperDetails, newFilter: DetailsFilterType) => void
  init: (details: ShopperDetails) => void
}

type CurrentShopperDetailsStore = CurrentShopperDetailsState &
  CurrentShopperDetailsAction

const useShopperDetailsStore = create<CurrentShopperDetailsStore>()(set => ({
  currentFilter: null,
  details: { orders: [] },
  filter: (currentDetails, currentFilter) => {
    const details: ShopperDetails = !currentFilter
      ? { ...currentDetails }
      : {
          orders: currentDetails.orders.filter(
            order => order.status === currentFilter
          )
        }
    set(state => ({ ...state, currentFilter, details }))
  },
  init: details => set(state => ({ ...state, details }))
}))

function useShopperDetailsInit() {
  const init = useShopperDetailsStore(store => store.init)

  return init
}

function useCurrentShopperDetails() {
  const current = useShopperDetailsStore(store => ({
    details: store.details,
    filter: store.currentFilter
  }))

  return current
}

function useFilterShopperDetails() {
  const filter = useShopperDetailsStore(store => store.filter)
  const { details } = useShopperDetailsContext()

  const filterShopperDetails = React.useCallback(
    (currentFilter: DetailsFilterType) => filter(details, currentFilter),
    [details]
  )

  return filterShopperDetails
}

export {
  useCurrentShopperDetails,
  useFilterShopperDetails,
  useShopperDetailsInit
}
