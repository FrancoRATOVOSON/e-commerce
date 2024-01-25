import React, { forwardRef } from 'react'

interface ModalProps {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
  onModalClose?: () => void
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className = '',
      childrenClassName = '',
      children,
      onModalClose = () => {}
    },
    ref
  ) => (
    <dialog
      ref={ref}
      className={`${className} 
    bg-light-bg-low text-light-text-high backdrop:bg-black-30 dark:backdrop:bg-black-60
    dark:bg-dark-bg-low dark:text-dark-text-high`}
      onClose={() => onModalClose()}
    >
      <div
        className={`${childrenClassName} w-fit h-fit flex justify-center items-center p-8`}
      >
        {children}
      </div>
    </dialog>
  )
)

export default Modal
