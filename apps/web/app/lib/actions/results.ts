import { ErrorActionState, SuccessActionState } from 'utils/types'

function getSuccessResponse<T>(payload?: T): SuccessActionState<T> {
  return { payload, state: 'success' }
}

const SERVER_ERROR: ErrorActionState = {
  code: 5,
  message: `Oups, une erreur s'est produite du côté du serveur. Veuillez réessayer plus tard`,
  state: 'error'
}

export { SERVER_ERROR, getSuccessResponse }
