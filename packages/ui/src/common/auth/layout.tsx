import * as React from 'react'

import AppLogo from '../../components/AppLogo'

interface AuthLayoutProps {
  children: React.ReactNode
  logoWrapper?: (props: {
    [key: string]: any
    children: React.ReactNode
  }) => React.JSX.Element
}

export default function AuthLayout({ children, logoWrapper }: AuthLayoutProps) {
  const Wrapper =
    logoWrapper ||
    (({ children: chld }: { children: React.ReactNode }) => <>{chld}</>)

  return (
    <div
      className={`
    flex flex-col items-center justify-between 
    w-full h-full gap-16 mt-16 overflow-hidden
    `}
    >
      <div className="flex items-center justify-center w-full">
        <Wrapper>
          <AppLogo />
        </Wrapper>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  )
}
