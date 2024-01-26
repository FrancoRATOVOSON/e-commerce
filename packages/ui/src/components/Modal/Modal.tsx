import React, { forwardRef } from 'react'

import { cn } from '../../utils'

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
      className={cn(
        [
          'bg-transparent text-foreground',
          'h-screen w-screen z-50 fixed top-0 right-0 bottom-0 left-0'
        ],
        className
      )}
      onClose={() => onModalClose()}
      ref={ref}
    >
      <div
        className={cn([
          'w-full h-full flex justify-center items-center',
          'bg-primary/10 relative top-0 bottom-0 left-0 right-0'
        ])}
      >
        <div
          className={cn(
            [
              'w-fit h-fit flex justify-center items-center p-8',
              'border border-border rounded-md bg-background'
            ],
            childrenClassName
          )}
        >
          {children}
        </div>
      </div>
    </dialog>
  )
)

export default Modal
