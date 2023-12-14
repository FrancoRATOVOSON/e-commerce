import React from 'react'

interface FormInputPros {
  label: string
  type: 'text' | 'email' | 'password'
  name?: string
  className?: string
}

export default function FormInput({
  label, type, name, className=''
}:FormInputPros) {
  return (
    <div className={`
    ${className} flex flex-col gap-1 justify-start items-start
    `}>
      <label
      htmlFor={name || label}
      className='font-medium'>
        {label}
      </label>
      <input
      type={type}
      name={name || label}
      id={name || label}
      className={`
      h-10 px-2 box-border w-full 
      bg-light-bg-lower dark:bg-dark-bg-lower 
      dark:focus:bg-dark-bg-low focus:bg-light-bg-low 
      border rounded border-light-bd-base 
      focus:border-light-bd-active focus:outline-none focus:border-2 
      dark:focus:border`}/>
    </div>
  )
}
