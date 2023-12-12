import React, { forwardRef, useEffect } from 'react'
import styles from './Modal.module.css'

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
    className={`${className} ${styles.modal}`}>
      <div className={`${childrenClassName} ${styles.children}`}>
      {children}
      </div>
    </dialog>
  )
})

export default Modal