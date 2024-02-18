/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import {
  Outlet,
  RouterProvider,
  createHashRouter,
  useLocation
} from 'react-router-dom'

import type {
  ActionFunction,
  LoaderFunction,
  RouteObject
} from 'react-router-dom'

import {
  generateModalRoutes,
  generatePreservedRoutes,
  generateRegularRoutes
} from '@generouted/react-router/core'

type ElementType = () => React.JSX.Element
type Module = {
  Action?: ActionFunction
  Catch?: ElementType
  Loader?: LoaderFunction
  Pending?: ElementType
  default: ElementType
}

const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', {
  eager: true
})
const MODALS = import.meta.glob<Pick<Module, 'default'>>(
  '/src/pages/**/[+]*.{jsx,tsx}',
  { eager: true }
)
const ROUTES = import.meta.glob<Module>(
  ['/src/pages/**/[\\w[-]*.{jsx,tsx}', '!**/(_app|404).*'],
  { eager: true }
)

const preservedRoutes =
  generatePreservedRoutes<Omit<Module, 'Action'>>(PRESERVED)
const modalRoutes = generateModalRoutes<ElementType>(MODALS)

const regularRoutes = generateRegularRoutes<RouteObject, Partial<Module>>(
  ROUTES,
  (module, key) => {
    const index =
      /index\.(jsx|tsx)$/.test(key) && !key.includes('pages/index')
        ? { index: true }
        : {}
    const Element = module?.default || React.Fragment
    const Page = () =>
      module?.Pending ? (
        <React.Suspense children={<Element />} fallback={<module.Pending />} />
      ) : (
        <Element />
      )
    return {
      ...index,
      Component: Page,
      ErrorBoundary: module?.Catch,
      action: module?.Action,
      loader: module?.Loader
    }
  }
)

const _app = preservedRoutes?._app
const _404 = preservedRoutes?.['404']

const Element = _app?.default || React.Fragment
const App = () =>
  _app?.Pending ? (
    <React.Suspense children={<Element />} fallback={<_app.Pending />} />
  ) : (
    <Element />
  )

const app = {
  Component: _app?.default ? App : Outlet,
  ErrorBoundary: _app?.Catch,
  loader: _app?.Loader
}
const fallback = { Component: _404?.default || React.Fragment, path: '*' }

export const routes: RouteObject[] = [
  { ...app, children: [...regularRoutes, fallback] }
]
export const Routes = () => <RouterProvider router={createHashRouter(routes)} />

export const Modals = () => {
  const Modal = modalRoutes[useLocation().state?.modal] || React.Fragment
  return <Modal />
}
