import { cookies } from 'next/headers'
import { stringToInt } from 'utils'

function setCookie(name: string, value: string) {
  return cookies().set({
    httpOnly: true,
    name,
    value
  })
}

function deleteCookie(name: string) {
  return cookies().delete(name)
}

export function setSessionCookie(id: number, login: string) {
  return setCookie('session', `${id}|${login}`)
}

export function setCartCookie(id: number) {
  return setCookie('cart', `${id}`)
}

export function removeCartCookie() {
  return deleteCookie('cart')
}

export function getUserSessionId(): number | undefined {
  const sessionCoockie = cookies().get('session')
  if (!sessionCoockie) return undefined

  const idFromSession = sessionCoockie.value.split('|')[0]
  const userId = stringToInt(idFromSession)

  if (!userId) return undefined

  return userId
}

export function getUserSessionCartId(): number | undefined {
  const cartCookie = cookies().get('cart')
  if (!cartCookie) return undefined

  const userCartId = cartCookie.value
  const cartId = stringToInt(userCartId)

  return cartId
}

export function deleteSession() {
  return deleteCookie('session')
}

export function hasSession() {
  return cookies().has('session')
}
