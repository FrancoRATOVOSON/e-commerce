import {
  DefaultValues,
  FieldErrors,
  FieldValues,
  Resolver,
  useForm
} from 'react-hook-form'

import { handleServerAction, login, signup } from '@/lib'
import { useUserConnectionState } from '@/stores'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'ui/utils'
import { userLoginSchema, userSignupSchema } from 'utils'
import {
  LoginFormData,
  ServerActionReturnType,
  SignupFormData
} from 'utils/types'

interface UseRegisterHooksParams<T extends FieldValues> {
  defaultValues?: DefaultValues<T>
  onError?: (e: FieldErrors<T>) => void
}

interface UseRegisterParams<T extends FieldValues>
  extends UseRegisterHooksParams<T> {
  action: (data: T) => Promise<ServerActionReturnType>
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
  const router = useRouter()
  const { login: setLogIn } = useUserConnectionState()

  return {
    errors,
    handleSubmit: handleSubmit(
      data =>
        handleServerAction({
          onSuccess: () => {
            setLogIn()
            router.push('/')
          },
          serverAction: () => action(data),
          success: {
            message: `Vous êtes maintenant connecté.`,
            title: 'Connecté'
          }
        }),
      e => {
        if (e.root || e['']) {
          const message = e.root?.message || e['']?.message
          toast.error('Pas si vite!', {
            description: message?.toString()
          })
        }
        onError && onError(e)
      }
    ),
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
