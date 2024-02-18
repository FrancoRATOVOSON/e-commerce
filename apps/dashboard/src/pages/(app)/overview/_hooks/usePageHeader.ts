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
  return useSetAtom(headerProps)
}

export { type TitleOrChildrenType, useHeaderValue, useSetHeader }
