import { LogedShopper, ShopperCredentials } from "utils/types"
import prisma from "./client"

export async function addShopper({email, password}:ShopperCredentials):Promise<LogedShopper>{
  return prisma.shopper.create({ data: { login: email, password } })
}

export async function getShopper({email, password}:ShopperCredentials):Promise<LogedShopper | null>{
  return prisma.shopper.findUnique({ where: { login: email, password }})
}