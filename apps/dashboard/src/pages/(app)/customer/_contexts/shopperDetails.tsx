import React from 'react'

import { ShopperDetails } from 'database/types'

import { useFetchShopperDetails, useShopperDetailsInit } from '../_hooks'

type ShopperDetailsContextType = {
  details: ShopperDetails
}

const defaultValue: ShopperDetailsContextType = {
  details: {
    orders: []
  }
}

const ShopperDetailsContext =
  React.createContext<ShopperDetailsContextType>(defaultValue)

function useShopperDetailsContext() {
  return React.useContext(ShopperDetailsContext)
}

interface ShopperDetailsProviderProps {
  children: React.ReactNode
  shopperId: number
}

function ShopperDetailsProvider({
  children,
  shopperId
}: ShopperDetailsProviderProps) {
  const details = useFetchShopperDetails(shopperId)
  const init = useShopperDetailsInit()

  init(details)

  return (
    <ShopperDetailsContext.Provider value={{ details }}>
      {children}
    </ShopperDetailsContext.Provider>
  )
}

export { ShopperDetailsProvider, useShopperDetailsContext }
