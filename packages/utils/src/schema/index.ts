import { ZodError } from 'zod'

export * from './user'

export interface DataValidationReturnType {
  success: boolean
  error?: ZodError
}