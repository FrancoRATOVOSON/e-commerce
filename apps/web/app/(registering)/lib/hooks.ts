import {
  DefaultValues,
  FieldErrors,
  FieldValues,
  Resolver,
  useForm
} from 'react-hook-form'

import { login, signup } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { userLoginSchema, userSignupSchema } from 'utils'
import { LoginFormData, SignupFormData } from 'utils/types'

interface UseRegisterHooksParams<T extends FieldValues> {
  defaultValues?: DefaultValues<T>
  onError?: (e: FieldErrors<T>) => void
}

interface UseRegisterParams<T extends FieldValues>
  extends UseRegisterHooksParams<T> {
  action: (data: T) => void
  resolver: Resolver<T, any>
}

function useRegister<T extends FieldValues>({
  action,
  defaultValues,
  onError,
  resolver
}: UseRegisterParams<T>) {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register
  } = useForm<T>({ defaultValues, mode: 'onChange', resolver })

  return {
    errors,
    handleSubmit: handleSubmit(action, e => onError && onError(e)),
    isSubmitting,
    register
  }
}

export function useLogin(params?: UseRegisterHooksParams<LoginFormData>) {
  const { defaultValues, onError } = params || {}
  const resolver = zodResolver(userLoginSchema)
  return useRegister<LoginFormData>({
    action: login,
    defaultValues,
    onError,
    resolver
  })
}

export function useSignup(params?: UseRegisterHooksParams<SignupFormData>) {
  const { defaultValues, onError } = params || {}
  const resolver = zodResolver(userSignupSchema)
  return useRegister<SignupFormData>({
    action: signup,
    defaultValues,
    onError,
    resolver
  })
}
