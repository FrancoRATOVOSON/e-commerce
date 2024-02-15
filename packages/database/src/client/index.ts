import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const libsql = createClient({
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
  url: `${process.env.DATABASE_URL}`
})

const adapter = new PrismaLibSQL(libsql)

const prisma = new PrismaClient({ adapter })

export default prisma

export * from '@prisma/client'
