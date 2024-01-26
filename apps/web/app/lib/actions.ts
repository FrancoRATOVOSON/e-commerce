'use server'

import { addShopper, getShopper } from 'database'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { isUserCredentialValid, userLoginSchema, userSignupSchema } from 'utils'
import { LoginFormData, SignupFormData } from 'utils/types'

export const getUserState = async () => cookies().has('session')

export const logOut = async () => {
  cookies().delete('session')
  revalidatePath('/')
}

export const signup = async (signupData: SignupFormData): Promise<string> => {
  try {
    isUserCredentialValid(userSignupSchema, signupData)
    const { id, login } = await addShopper(signupData)
    cookies().set({
      httpOnly: true,
      name: 'session',
      value: `${id}|${login}`
    })
    return redirect('/')
  } catch (err) {
    if (err instanceof Error) return err.message
    return String(err)
  }
}

export const login = async (loginData: LoginFormData) => {
  try {
    isUserCredentialValid(userLoginSchema, loginData)
    const user = await getShopper(loginData)
    if (user) {
      cookies().set({
        httpOnly: true,
        name: 'session',
        value: `${user.id}|${user.login}`
      })
      return redirect('/')
    }
    return 'Email or Password invalid.'
  } catch (err) {
    if (err instanceof Error) return err.message
    return String(err)
  }
}
