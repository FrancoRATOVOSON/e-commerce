import React from 'react'
import { Outlet } from 'react-router-dom'

import {
  ControllablePanelHandle,
  LayoutGroup,
  Panel,
  PanelResizeHandle
} from 'ui'

import { NavBar } from './_components'

function useNavSizes() {
  let navCollapsedSize = 8
  let navDefaultSize = 25
  let navMaxSize = 30
  let navMinSize = 20

  if (window.innerWidth > 800 && window.innerWidth <= 1500) {
    navCollapsedSize = 5
    navDefaultSize = 15
    navMaxSize = 20
    navMinSize = 13
  }

  if (window.innerWidth > 1500) {
    navCollapsedSize = 3
    navDefaultSize = 10
    navMaxSize = 15
    navMinSize = 8
  }

  return React.useMemo(
    () => ({
      navCollapsedSize,
      navDefaultSize,
      navMaxSize,
      navMinSize
    }),
    [window.innerWidth]
  )
}

export default function AppLayout() {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false)
  const navRef = React.useRef<ControllablePanelHandle>(null)
  const { navCollapsedSize, navDefaultSize, navMaxSize, navMinSize } =
    useNavSizes()

  const collapseNav = React.useCallback(() => {
    const panel = navRef.current
    if (panel) panel.collapse()
  }, [navRef])

  const expandNav = React.useCallback(() => {
    const panel = navRef.current
    if (panel) panel.expand()
  }, [navRef])

  return (
    <LayoutGroup direction="horizontal">
      <Panel
        collapsedSize={navCollapsedSize}
        collapsible
        defaultSize={navDefaultSize}
        maxSize={navMaxSize}
        minSize={navMinSize}
        onCollapse={() => setIsNavCollapsed(true)}
        onExpand={() => setIsNavCollapsed(false)}
        ref={navRef}
      >
        <NavBar
          isCollapsed={isNavCollapsed}
          toggle={() => {
            if (isNavCollapsed) expandNav()
            else collapseNav()
          }}
        />
      </Panel>
      <PanelResizeHandle />
      <Panel>
        <Outlet />
      </Panel>
    </LayoutGroup>
  )
}
