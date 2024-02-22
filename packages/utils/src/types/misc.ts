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

export type ImageDetails = {
  alt: string
  src: string
}

export type PriceDetails = {
  currency: string
  value: number
}

export type InfoTileData = {
  label: string
  value: PriceDetails | number | string
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type WithPartial<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] }

type RequiredOnly<T, K extends keyof T> = Required<Pick<T, K>>
type PartialWithout<T, K extends keyof T> = Partial<
  Pick<T, Exclude<keyof T, K>>
>

export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: RequiredOnly<T, K> & PartialWithout<T, K>
}[keyof T]

export type OmitStrict<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
