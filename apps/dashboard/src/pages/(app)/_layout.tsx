import React from 'react'
import { Outlet } from 'react-router-dom'

import { LayoutGroup, Panel, PanelResizeHandle } from 'ui/components'

import { NavBar } from './_components'
import { useNavPanel } from './_hooks'

export default function AppLayout() {
  const {
    collapseNav,
    expandNav,
    isNavCollapsed,
    isNavResizable,
    navRef,
    navSize,
    setIsNavCollapsed
  } = useNavPanel()
  const { navCollapsedSize, navDefaultSize, navMaxSize, navMinSize } = navSize

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
      <PanelResizeHandle disabled={!isNavResizable} />
      <Panel>
        <Outlet />
      </Panel>
    </LayoutGroup>
  )
}
