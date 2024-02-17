import * as React from 'react'

import { cn } from 'ui/utils'

interface PageProps {
  children: React.ReactNode
  className?: string
}

export default function Page({ children, className }: PageProps) {
  return <div className={cn(className, 'w-full h-full')}>{children}</div>
}
