import { Button, Toaster } from '../components'
import { toast } from '../utils'

function ToastFixture({ onClick }: { onClick: () => void }) {
  return (
    <div>
      <Button onClick={onClick}>Click to toast</Button>
      <Toaster richColors={true} />
    </div>
  )
}

export default {
  Action: (
    <ToastFixture
      onClick={() =>
        toast('This is a success toast', {
          action: {
            label: 'Undo',
            onClick: () => {}
          },
          description: 'Success message'
        })
      }
    />
  ),
  Description: (
    <ToastFixture
      onClick={() =>
        toast.message('Toast message', {
          description: 'This is the description of a simple toast message'
        })
      }
    />
  ),
  Error: (
    <ToastFixture
      onClick={() =>
        toast.error('Error', {
          description: 'This is an error toast'
        })
      }
    />
  ),
  Message: (
    <ToastFixture onClick={() => toast('This is a simple message toast')} />
  ),
  Success: (
    <ToastFixture
      onClick={() =>
        toast.success('This is a success toast', {
          description: 'Success message'
        })
      }
    />
  ),
  'Success Action': (
    <ToastFixture
      onClick={() =>
        toast.success('This is a success toast', {
          action: {
            label: 'Undo',
            onClick: () => {}
          },
          description: 'Success message'
        })
      }
    />
  )
}
