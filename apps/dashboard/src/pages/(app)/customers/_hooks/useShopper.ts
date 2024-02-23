import * as React from 'react'

import { ShopperData } from 'database/types'
import { atom, useAtomValue, useSetAtom } from 'jotai'

type ShopperStoreState = {
  shopper: ShopperData | null
}

const shopperAtom = atom<ShopperStoreState>({ shopper: null })

function useShopperValue(): ShopperData | null {
  const shopperAtomValue = useAtomValue(shopperAtom)

  return shopperAtomValue.shopper
}

function useSetShopper() {
  const setShopperAtom = useSetAtom(shopperAtom)

  const setShopper = React.useCallback((shopper: ShopperData) => {
    setShopperAtom({ shopper })
  }, [])

  return setShopper
}

export { useSetShopper, useShopperValue }
