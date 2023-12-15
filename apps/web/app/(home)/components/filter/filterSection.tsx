import React from "react"

interface FilterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

export default function FilterSection({
  label,
  children,
  className,
  ...props
}:FilterSectionProps){
  return (
    <div
    className={`
    ${className ?? ''}
    flex flex-col justify-start items-stretch gap-1
    `}
    {...props}>
      <p className='font-medium'>{label}</p>
      {children}
    </div>
  )
}