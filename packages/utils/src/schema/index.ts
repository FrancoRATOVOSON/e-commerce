import { ZodError } from 'zod'

export * from './user'

export interface DataValidationReturnType {
  error?: ZodError
  success: boolean
}

export { ZodError } from 'zod'
