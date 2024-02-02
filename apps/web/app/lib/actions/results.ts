import { toast } from 'ui/utils'
import {
  ErrorActionState,
  ServerActionReturnType,
  SuccessActionState
} from 'utils/types'

function getSuccessResponse<T>(payload?: T): SuccessActionState<T> {
  return { payload, state: 'success' }
}

const SERVER_ERROR: ErrorActionState = {
  code: 5,
  message: `Oups, une erreur s'est produite du côté du serveur. Veuillez réessayer plus tard`,
  state: 'error'
}

type HandleServerActionParams<T = undefined> = {
  onError?: () => void
  onSuccess?: (pyload?: T) => void
  serverAction: () => Promise<ServerActionReturnType<T>>
  success: {
    message: string
    title: string
  }
}

async function handleServerAction<T>({
  onError,
  onSuccess,
  serverAction,
  success
}: HandleServerActionParams<T>) {
  const toastId = toast.loading('...Patientez')
  const result = await serverAction()

  if (result.state === 'error') {
    toast.error('Erreur', { description: result.message, id: toastId })
    onError && onError()
  } else {
    toast.success(success.title, {
      description: success.message,
      id: toastId
    })
    onSuccess && onSuccess(result.payload)
  }
}

export { SERVER_ERROR, getSuccessResponse, handleServerAction }
