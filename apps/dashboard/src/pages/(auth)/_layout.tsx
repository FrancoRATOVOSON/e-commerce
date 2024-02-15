import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Link } from '@/components'
import { FormWrapper, AuthLayout as Layout } from 'ui/common'

export default function AuthLayout() {
  const pathName = useLocation().pathname

  return (
    <Layout>
      <FormWrapper
        linkComponent={({ children, href }) => (
          <Link to={href}>{children}</Link>
        )}
        pathName={pathName}
      >
        <Outlet />
      </FormWrapper>
    </Layout>
  )
}
