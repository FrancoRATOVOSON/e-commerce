import * as React from 'react'

import { appWindow } from '@tauri-apps/api/window'
import { atom, useSetAtom } from 'jotai'

const windowTitle = atom('YShop - Admin')

function useSetWindowTitle() {
  const setTitle = useSetAtom(windowTitle)

  const setWindowTitle = React.useCallback(
    (value: ((base: string) => string) | string) => {
      if (window.__TAURI__)
        appWindow.setTitle(
          typeof value === 'string' ? value : value('YShop Admin')
        )
    },
    [setTitle]
  )

  return setWindowTitle
}

// eslint-disable-next-line import/prefer-default-export
export { useSetWindowTitle }
