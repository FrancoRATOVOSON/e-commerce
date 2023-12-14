import React from "react"

const IconButton = ({
    children,
    className,
    ...props
  }:React.HTMLAttributes<HTMLButtonElement>) => (
  <button
  className={`
  ${className ?? ''}
  text-inherit hover:text-sld-base w-fit h-fit transition
  `}
  {...props}>
    {children}
  </button>
)

export default IconButton