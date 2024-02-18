import * as React from 'react'

import {
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
  // Separator
} from 'ui/components'
import { cn } from 'ui/utils'
import { PriceDetails } from 'utils/types'

import DataCard from './data-card'

interface DataListProps {
  className?: string
  description: string
  title: string
  data: Array<{
    description: string
    title: string
    value: PriceDetails | number | string
  }>
}

export default function DataList({
  className,
  data,
  description,
  title
}: DataListProps) {
  return (
    <CardContainer className={cn(className, 'space-y-4 p-6')}>
      <CardHeader className="space-y-1 m-0 p-0">
        <CardTitle className="text-xl leading-3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-start items-stretch gap-3 m-0 p-0">
        {data.map(element => (
          <DataCard key={element.title} {...element} />
        ))}
      </CardContent>
    </CardContainer>
  )
}
