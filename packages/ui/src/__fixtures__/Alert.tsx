import { VariantProps } from 'class-variance-authority'
import { RocketIcon } from 'lucide-react'
import { getRandomDescription } from 'utils/faker'

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
      description={getRandomDescription()}
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
  Base: <AlertComponent />,
  Destructive: (
    <Alert
      Icon={<RocketIcon />}
      description={getRandomDescription()}
      intent={'destructive'}
      outline={'bordered'}
      title="Alert dialog"
    />
  ),
  Dialog: <AlertFixture />
}
