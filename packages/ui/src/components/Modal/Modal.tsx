import React, { forwardRef } from 'react'

interface ModalProps {
  children: React.ReactNode
  childrenClassName?: string
  className?: string
  onModalClose?: () => void
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      children,
      childrenClassName = '',
      className = '',
      onModalClose = () => {}
    },
    ref
  ) => (
    <dialog
      className={`${className} 
    bg-light-bg-low text-light-text-high backdrop:bg-black-30 dark:backdrop:bg-black-60
    dark:bg-dark-bg-low dark:text-dark-text-high`}
      onClose={() => onModalClose()}
      ref={ref}
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
