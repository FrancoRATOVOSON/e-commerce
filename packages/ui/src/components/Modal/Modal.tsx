import React, { forwardRef } from 'react'

import { cn } from '@/utils'

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
      className={cn(['text-foreground bg-accent'], className)}
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
