import { ZodSchema, ZodType, z } from 'zod'

import { LoginFormData, SignupFormData } from '../types'

export const userLoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Ivalid field type, please put your email.',
      required_error: 'Email is required'
    })
    .email({ message: 'Invalid mail format, please check' }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(1, { message: 'Please, provide a non empty password' })
}) satisfies ZodType<LoginFormData>

export const userSignupSchema = userLoginSchema
  .extend({ confPassword: z.string() })
  .refine(
    schema => schema.password === schema.confPassword,
    'Password confirmation failed'
  ) satisfies ZodType<SignupFormData>

export function isUserCredentialValid(schema: ZodSchema, data: unknown) {
  schema.parse(data)
}
