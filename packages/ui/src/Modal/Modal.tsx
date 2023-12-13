import React, { forwardRef, useEffect } from 'react'

interface ModalProps {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
}

const Modal = forwardRef(function({
  className='',
  childrenClassName='',
  children
}:ModalProps, modalRef:React.ForwardedRef<HTMLDialogElement>) {
  return (
    <dialog
    ref={modalRef}
    className={`${className} 
    bg-light-bg-low text-light-text-high backdrop:bg-black-30 dark:backdrop:bg-black-60
    dark:bg-dark-bg-low dark:text-dark-text-high`}>
      <div className={`${childrenClassName} w-fit h-fit flex justify-center items-center p-8`}>
      {children}
      </div>
    </dialog>
  )
})

export default Modal