import React from 'react'

export default function Form({
  className='',
  children,
  ...props
}:React.HTMLAttributes<HTMLFormElement>) {
  return (
    <form
    className={`${className} 
    flex flex-col items-center justify-start gap-6 w-72`}
    {...props}>
      {children}
    </form>
  )
}
