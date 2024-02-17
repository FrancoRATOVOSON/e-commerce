import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { format } from 'utils'

import { CalendarDays as CalendarIcon } from '../../Icons'
import { Calendar } from '../../shadcn/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../../shadcn/popover'
import { cn } from '../../utils'
import Button from '../Button'

function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
          variant={'secondary'}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  )
}

interface DatePickerWithRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  defaultValues?: {
    from: Date
    to?: Date
  }
}

function DatePickerWithRange({
  className,
  defaultValues
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(defaultValues)

  let label = <span>Pick a date</span>

  if (date?.from) {
    if (date.to)
      label = (
        <>
          {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
        </>
      )
    else format(date.from, 'LLL dd, y')
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
            id="date"
            variant={'secondary'}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            defaultMonth={date?.from}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={setDate}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker, DatePickerWithRange }
