import * as React from 'react'

import { appWindow } from '@tauri-apps/api/window'
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

  const setHeader = (header: TitleOrChildrenType) => {
    if (window.__TAURI__)
      appWindow
        .setTitle(`YShop Admin - ${header.title}`)
        .then(() => setHeaderAtom(header))
    else setHeaderAtom(header)
  }

  return setHeader
}

export { type TitleOrChildrenType, useHeaderValue, useSetHeader }
