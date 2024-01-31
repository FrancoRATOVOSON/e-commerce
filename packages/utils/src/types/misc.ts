export type NonEmptyArrayOf<T> = [T, ...T[]]
export type FunctionOf<T> = () => T

interface ServerActionState<T> {
  code?: 4 | 5
  message?: string
  payload?: T
  state: 'error' | 'success'
}

export interface SuccessActionState<T>
  extends Omit<ServerActionState<T>, 'code' | 'message'> {
  state: 'success'
}

export interface ErrorActionState extends ServerActionState<undefined> {
  code: 4 | 5
  message: string
  state: 'error'
}

export type ServerActionReturnType<T = undefined> =
  | ErrorActionState
  | SuccessActionState<T>
