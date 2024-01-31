import { LogedShopper, ShopperCredentials } from 'utils/types'

import prisma from '../client'

export async function addShopper({
  email,
  password
}: ShopperCredentials): Promise<Omit<LogedShopper, 'password'>> {
  return prisma.shopper.create({ data: { login: email, password } })
}

export async function getShopper({
  email
}: ShopperCredentials): Promise<LogedShopper | null> {
  return prisma.shopper.findUnique({ where: { login: email } })
}
