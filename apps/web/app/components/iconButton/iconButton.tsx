import React from "react"

const IconButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({
    children,
    className,
    ...props
  },ref) => (
  <button
  ref={ref}
  className={`
  ${className ?? ''}
  text-inherit hover:text-sld-base w-fit h-fit transition
  `}
  {...props}>
    {children}
  </button>
))

IconButton.displayName = 'IconButton'

export default IconButton