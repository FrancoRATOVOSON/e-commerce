import * as React from 'react'

import { Sheet } from '../../shadcn/sheet'

type GlobalSheetStateType = {
  content: React.ReactNode
  onSheetClose?(): void
  open: boolean
}

type GlobalSheetStateListener = (state: GlobalSheetStateType) => void

let globalSheetState: GlobalSheetStateType = {
  content: null,
  open: false
}
let globalSheetStateListeners: Array<GlobalSheetStateListener> = []

function emitChange(state: GlobalSheetStateType) {
  globalSheetStateListeners.forEach(listener => listener(state))
}

type OpenSheetParams = {
  content: React.ReactNode
  onOpenChange?: () => void
}

const sheetStateStore = {
  closeSheet() {
    globalSheetState = {
      ...globalSheetState,
      onSheetClose: undefined,
      open: false
    }
    emitChange(globalSheetState)
  },
  getSnapshot() {
    return globalSheetState
  },
  openSheet(params: OpenSheetParams) {
    globalSheetState = { open: true, ...params }
    emitChange({ open: true, ...params })
  },
  subscribe(listener: (state: GlobalSheetStateType) => void) {
    globalSheetStateListeners = [...globalSheetStateListeners, listener]

    return () => {
      globalSheetStateListeners = globalSheetStateListeners.filter(
        l => l !== listener
      )
    }
  }
}

function openSheet(params: OpenSheetParams) {
  sheetStateStore.openSheet(params)
}

function closeSheet() {
  sheetStateStore.closeSheet()
}

function useSheetState() {
  const state = React.useSyncExternalStore(
    sheetStateStore.subscribe,
    sheetStateStore.getSnapshot
  )

  return state
}

function ControlledSheet() {
  const { content, onSheetClose, open: openState } = useSheetState()

  return (
    <Sheet
      onOpenChange={open => {
        if (!open) {
          onSheetClose && onSheetClose()
          closeSheet()
        }
      }}
      open={openState}
    >
      {content}
    </Sheet>
  )
}

export { ControlledSheet, openSheet }
