import { VariantProps } from 'class-variance-authority'
import { fakeRandomDescription } from 'database/faker'
import { RocketIcon } from 'lucide-react'

import {
  Alert,
  Button,
  Dialog,
  DialogContextProvider,
  alertStyle,
  createDialogContext,
  useCloseDialog,
  useShowDialog
} from '../components'

const dialogContext = createDialogContext()

function OpenDialogButton() {
  const showModal = useShowDialog(dialogContext)

  return <Button onClick={showModal}>Open Dialog</Button>
}

function AlertComponent({ intent, outline }: VariantProps<typeof alertStyle>) {
  const close = useCloseDialog(dialogContext)

  return (
    <Alert
      Icon={<RocketIcon />}
      action={() => close()}
      cancelAction={() => close()}
      description={fakeRandomDescription()}
      intent={intent}
      outline={outline}
      title="Alert dialog"
    />
  )
}

function DialogModal() {
  return (
    <Dialog context={dialogContext}>
      <AlertComponent />
    </Dialog>
  )
}

function AlertFixture() {
  return (
    <DialogContextProvider context={dialogContext}>
      <OpenDialogButton />
      <DialogModal />
    </DialogContextProvider>
  )
}

export default {
  Base: <AlertComponent outline={'bordered'} />,
  Destructive: (
    <Alert
      Icon={<RocketIcon />}
      description={fakeRandomDescription()}
      intent={'destructive'}
      outline={'bordered'}
      title="Alert dialog"
    />
  ),
  Dialog: <AlertFixture />
}
