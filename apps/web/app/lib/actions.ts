'use server'

import { addShopper, getShopper } from 'database'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import {
  ZodError,
  isUserCredentialValid,
  userLoginSchema,
  userSignupSchema
} from 'utils'
import { LoginFormData, SignupFormData } from 'utils/types'

interface ServerActionState {
  code?: 4 | 5
  message?: string
  state: 'error' | 'success'
}

interface SuccessActionState
  extends Omit<ServerActionState, 'code' | 'message'> {
  state: 'success'
}

interface ErrorActionState extends ServerActionState {
  code: 4 | 5
  message: string
  state: 'error'
}

export type ServerActionReturnType = ErrorActionState | SuccessActionState

const SUCCESS_ACTION: SuccessActionState = { state: 'success' }
const SERVER_ERROR: ErrorActionState = {
  code: 5,
  message: `Oups, une erreur s'est produite du côté du serveur. Veuillez réessayer plus tard`,
  state: 'error'
}
const DATA_VALIDATION_ERROR: ErrorActionState = {
  code: 4,
  message:
    'Erreur de validation, veuillez bien vérifier les informations que vous avez reseigné.',
  state: 'error'
}
const USER_NOT_FOUND_ERROR: ErrorActionState = {
  code: 4,
  message: `Le nom d'utilisateur mentionné n'existe pas, veuillez d'abord vous créer un compte.`,
  state: 'error'
}
const PASSWORD_ERROR: ErrorActionState = {
  code: 4,
  message: 'Mot de passe incorrect.',
  state: 'error'
}

export const getUserState = async () => cookies().has('session')

export const logOut = async () => {
  cookies().delete('session')
  revalidatePath('/')
}

export const signup = async (
  signupData: SignupFormData
): Promise<ServerActionReturnType> => {
  try {
    isUserCredentialValid(userSignupSchema, signupData)
    const { id, login } = await addShopper(signupData)
    cookies().set({
      httpOnly: true,
      name: 'session',
      value: `${id}|${login}`
    })
    return SUCCESS_ACTION
  } catch (err) {
    return err instanceof ZodError ? DATA_VALIDATION_ERROR : SERVER_ERROR
  }
}

export const login = async (
  loginData: LoginFormData
): Promise<ServerActionReturnType> => {
  try {
    isUserCredentialValid(userLoginSchema, loginData)
    const user = await getShopper(loginData)
    if (!user) return USER_NOT_FOUND_ERROR
    if (user.password !== loginData.password) return PASSWORD_ERROR

    cookies().set({
      httpOnly: true,
      name: 'session',
      value: `${user.id}|${user.login}`
    })
    return SUCCESS_ACTION
  } catch (err) {
    return err instanceof ZodError ? DATA_VALIDATION_ERROR : SERVER_ERROR
  }
}
