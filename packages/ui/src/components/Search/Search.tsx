import React from 'react'

import { SearchIcon } from 'lucide-react'

import Input from '../../shadcn/input'
import { cn } from '../../utils'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, placeholder = 'Search...', ...props }, ref) => (
    <div className={cn(className, 'relative')}>
      <SearchIcon className={cn('absolute left-3 top-3 h-4 w-4')} />
      <Input
        className="pl-10"
        placeholder={placeholder}
        ref={ref}
        type="search"
        {...props}
      />
    </div>
  )
)

export default Search
