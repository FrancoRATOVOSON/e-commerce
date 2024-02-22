import * as React from 'react'

import { atom, useAtomValue, useSetAtom } from 'jotai'
import { RequireAtLeastOne } from 'utils/types'

type TitleOrChildrenType = RequireAtLeastOne<{
  children: React.ReactNode
  title: string
}>

const defaultHeader: TitleOrChildrenType = { title: 'Are you lost ?' }

const headerProps = atom<TitleOrChildrenType>(defaultHeader)

function useHeaderValue() {
  return useAtomValue(headerProps)
}

function useSetHeader() {
  const setHeaderAtom = useSetAtom(headerProps)

  const setHeader = React.useCallback(
    (header: TitleOrChildrenType) => {
      setHeaderAtom(header)
    },
    [setHeaderAtom]
  )

  return setHeader
}

export { type TitleOrChildrenType, useHeaderValue, useSetHeader }
