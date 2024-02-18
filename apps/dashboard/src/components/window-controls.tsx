import * as React from 'react'

import { appWindow } from '@tauri-apps/api/window'
import { WindowControls as Controls } from 'ui/components'

export default function WindowControls() {
  const [isMaximized, setIsMaximized] = React.useState(false)

  React.useEffect(() => {
    appWindow.isMaximized().then(value => setIsMaximized(value))
  }, [])

  return (
    <Controls
      defaultState={isMaximized}
      onClose={() => appWindow.close()}
      onMinimize={() => appWindow.minimize()}
      toggleMaximize={() => appWindow.toggleMaximize()}
    />
  )
}
