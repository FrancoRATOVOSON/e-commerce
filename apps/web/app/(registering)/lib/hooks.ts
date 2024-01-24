import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm, FieldValues, DefaultValues, FieldErrors } from "react-hook-form";
import { userLoginSchema, userSignupSchema } from "utils";
import { LoginFormData, SignupFormData } from "utils/types";
import { login, signup } from "@/lib";

interface UseRegisterHooksParams<T extends FieldValues> {
  defaultValues?:DefaultValues<T>,
  onError?: (e:FieldErrors<T>) => void
}

interface UseRegisterParams<T extends FieldValues> extends UseRegisterHooksParams<T> {
  resolver:Resolver<T, any>,
  action:(data:T)=> void,
}

function useRegister<T extends FieldValues>({
  resolver, action, defaultValues, onError
}:UseRegisterParams<T>) {
  const {
    register, handleSubmit, formState: {errors, isSubmitting}
  } = useForm<T>({ resolver, mode: 'onChange', defaultValues })

  return {
    register, errors, isSubmitting,
    handleSubmit: () => handleSubmit(action, e => {onError && onError(e)}) ,
  }
}

export function useLogin(params?:UseRegisterHooksParams<LoginFormData>){
  const { defaultValues, onError } = params || {}
  const resolver = zodResolver(userLoginSchema)
  return useRegister<LoginFormData>({resolver, action:login, defaultValues, onError})
}

export function useSignup(params?:UseRegisterHooksParams<SignupFormData>) {
  const { defaultValues, onError } = params || {}
  const resolver = zodResolver(userSignupSchema)
  return useRegister<SignupFormData>({resolver, action:signup, defaultValues, onError})
}