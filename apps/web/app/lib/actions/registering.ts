'use server'

import { addShopper, getShopper } from 'database'
import { revalidatePath } from 'next/cache'
import {
  ZodError,
  isUserCredentialValid,
  userLoginSchema,
  userSignupSchema
} from 'utils'
import {
  ErrorActionState,
  LoginFormData,
  ServerActionReturnType,
  SignupFormData
} from 'utils/types'

import { deleteSession, hasSession, setSessionCookie } from '../cookies'
import { SERVER_ERROR, getSuccessResponse } from './results'

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

export const getUserState = async () => hasSession()

export const logOut = async () => {
  deleteSession()
  revalidatePath('/')
}

export const signup = async (
  signupData: SignupFormData
): Promise<ServerActionReturnType> => {
  try {
    isUserCredentialValid(userSignupSchema, signupData)
    const { id, login } = await addShopper(signupData)
    setSessionCookie(id, login)

    return getSuccessResponse()
  } catch (err) {
    if (err instanceof ZodError) return DATA_VALIDATION_ERROR
    return SERVER_ERROR
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

    setSessionCookie(user.id, user.login)

    return getSuccessResponse()
  } catch (err) {
    if (err instanceof ZodError) return DATA_VALIDATION_ERROR
    return SERVER_ERROR
  }
}
