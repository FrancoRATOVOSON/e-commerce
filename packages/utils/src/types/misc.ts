export type NonEmptyArrayOf<T> = [T, ...T[]]
export type FunctionOf<T> = () => T

type ServerActionState<T> = {
  code?: 4 | 5
  message?: string
  payload?: T
  state: 'error' | 'success'
}

export type SuccessActionState<T> = Omit<
  ServerActionState<T>,
  'code' | 'message'
> & {
  state: 'success'
}

export type ErrorActionState = ServerActionState<undefined> & {
  code: 4 | 5
  message: string
  state: 'error'
}

export type ServerActionReturnType<T = undefined> =
  | ErrorActionState
  | SuccessActionState<T>
