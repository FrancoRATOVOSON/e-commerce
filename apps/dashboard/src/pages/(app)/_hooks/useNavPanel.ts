import * as React from 'react'

import { ControllablePanelHandle } from 'ui/components'
import { useCustomMedia, useScreenSize } from 'ui/hooks'

function getNavSizes(screen: ReturnType<typeof useScreenSize>) {
  let navCollapsedSize = 8
  let navDefaultSize = 8
  let navMaxSize = 8
  let navMinSize = 8

  if (screen.md) {
    navCollapsedSize = 5
    navDefaultSize = 5
    navMaxSize = 25
    navMinSize = 15
  }

  if (screen.lg) {
    navCollapsedSize = 5
    navDefaultSize = 20
    navMaxSize = 25
    navMinSize = 15
  }

  return {
    navCollapsedSize,
    navDefaultSize,
    navMaxSize,
    navMinSize
  }
}

function useNavPanel() {
  const navRef = React.useRef<ControllablePanelHandle>(null)
  const [isNavResizable, setIsnavResizable] = React.useState(false)

  const collapseNav = React.useCallback(() => {
    const panel = navRef.current
    if (panel && isNavResizable) panel.collapse()
  }, [navRef, isNavResizable])

  const expandNav = React.useCallback(() => {
    const panel = navRef.current
    if (panel && isNavResizable) panel.expand()
  }, [navRef, isNavResizable])

  const screen = useScreenSize()
  const [navSize, setNavSize] = React.useState(getNavSizes(screen))
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(screen.lg)

  const handleSizeChanges = (match: boolean) => {
    setNavSize(getNavSizes(screen))
    setIsnavResizable(match)

    const panel = navRef.current
    if (panel) panel.resize(navSize.navDefaultSize)
  }

  const resizableScreen = useCustomMedia(
    { minWidth: 896 },
    undefined,
    handleSizeChanges
  )

  React.useEffect(() => {
    setIsnavResizable(resizableScreen)
  }, [])

  return {
    collapseNav,
    expandNav,
    isNavCollapsed,
    isNavResizable,
    navRef,
    navSize,
    setIsNavCollapsed
  }
}

export default useNavPanel
