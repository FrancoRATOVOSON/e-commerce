import {
  Button,
  Dialog,
  DialogContextProvider,
  createDialogContext,
  useCloseDialog,
  useShowDialog
} from '../components'

const dialogContext = createDialogContext()

function OpenDialogButton() {
  const showModal = useShowDialog(dialogContext)

  return <Button onClick={showModal}>Open Dialog</Button>
}

function DialogContent() {
  const closeModal = useCloseDialog(dialogContext)

  return (
    <div className="flex flex-col gap-6">
      <p>This is the dialog</p>
      <Button onClick={closeModal} variant="secondary">
        Close Modal
      </Button>
    </div>
  )
}

function DialogModal() {
  return (
    <Dialog context={dialogContext}>
      <DialogContent />
    </Dialog>
  )
}

function DialogFixture() {
  return (
    <DialogContextProvider context={dialogContext}>
      <OpenDialogButton />
      <DialogModal />
    </DialogContextProvider>
  )
}

export default {
  Default: <DialogFixture />
}
