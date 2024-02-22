import * as React from 'react'

import { appWindow } from '@tauri-apps/api/window'
import { atom, useSetAtom } from 'jotai'

const windowTitle = atom('YShop - Admin')

function useSetWindowTitle() {
  const setTitle = useSetAtom(windowTitle)

  const setWindowTitle = React.useCallback(
    (value: string) => {
      if (window.__TAURI__) appWindow.setTitle(value)
    },
    [setTitle]
  )

  return setWindowTitle
}

// eslint-disable-next-line import/prefer-default-export
export { useSetWindowTitle }
