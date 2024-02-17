import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import 'style-config/style.css'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>YShop - Admin</title>
      </Helmet>
      <Outlet />
    </HelmetProvider>
  )
}
