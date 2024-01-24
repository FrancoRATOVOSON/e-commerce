import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

import dotenv from 'dotenv'

dotenv.config()

const libsql = createClient({
  url: `${process.env.DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)

const prisma = new PrismaClient({ adapter })

export default prisma

export * from '@prisma/client'