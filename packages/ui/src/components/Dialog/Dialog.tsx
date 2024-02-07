/* global MutationCallback, MutationObserverInit */
import * as React from 'react'

import { cn } from '../../utils'

interface DialogContext
  extends React.Context<React.RefObject<HTMLDivElement>> {}

interface DialogContextProviderProps {
  children: React.ReactNode
  context: DialogContext
}

interface DialogConainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function createDialogContext(): DialogContext {
  return React.createContext(React.createRef<HTMLDivElement>())
}

function useDialogContext(context: DialogContext) {
  return React.useContext(context)
}

function useMutationCallbackObserver<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: MutationCallback,
  options: MutationObserverInit
) {
  React.useEffect(() => {
    const observer = new MutationObserver(callback)
    if (ref.current) {
      observer.observe(ref.current, options)
    }
    return () => observer.disconnect()
  }, [options, callback])
}

function useDialog(context: DialogContext) {
  const dialogRef = useDialogContext(context)
  const [state, setState] = React.useState<boolean>(false)

  const handleDialogAttributeChange = (mutations: MutationRecord[]) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && dialogRef.current)
        setState(dialogRef.current.getAttribute('data-modal') === 'open')
    })
  }

  useMutationCallbackObserver(dialogRef, handleDialogAttributeChange, {
    attributes: true
  })

  return {
    isOpen: state
  }
}

function useShowDialog(context: DialogContext) {
  const dialogRef = useDialogContext(context)

  return () => dialogRef.current?.setAttribute('data-modal', 'open')
}

function useCloseDialog(context: DialogContext) {
  const dialogRef = useDialogContext(context)

  return () => dialogRef.current?.setAttribute('data-modal', 'close')
}

function DialogContextProvider({
  children,
  context
}: DialogContextProviderProps) {
  const modalRef = React.useRef<HTMLDivElement>(null)

  return <context.Provider value={modalRef}>{children}</context.Provider>
}

function DialogOverlay() {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-screen h-screen bg-primary opacity-30 transition-opacity z-40'
      )}
    />
  )
}

function DialogConainer({
  children,
  className,
  ...props
}: DialogConainerProps) {
  return (
    <div
      className={cn(
        'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'w-fit h-fit flex justify-center items-center p-3',
        'border border-border rounded-md bg-background z-50 shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface DialogProps {
  children: React.ReactNode
  className?: string
  context: DialogContext
}

function Dialog({ children, className, context }: DialogProps) {
  const dialogRef = React.useContext(context)
  const { isOpen } = useDialog(context)

  return (
    <div
      className={cn(
        'data-[modal=close]:hidden absolute top-0 right-0 bottom-0 left-0 z-30'
      )}
      data-modal="close"
      ref={dialogRef}
    >
      {isOpen && (
        <>
          <DialogConainer className={cn(className)}>{children}</DialogConainer>
          <DialogOverlay />
        </>
      )}
    </div>
  )
}

export {
  Dialog,
  type DialogContext,
  DialogContextProvider,
  createDialogContext,
  useCloseDialog,
  useShowDialog
}
