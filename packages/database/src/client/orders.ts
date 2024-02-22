import { OrderStatusType } from 'utils/types'

import prismaClient from './config'

const prisma = prismaClient.$extends({
  name: 'prisma_extension_query_order_status',
  result: {
    order: {
      status: {
        compute(data): OrderStatusType {
          const { deliveredAt, validatedAt } = data
          if (!validatedAt && !deliveredAt) return OrderStatusType.CART
          if (validatedAt && !deliveredAt) return OrderStatusType.VALIDATED
          if (validatedAt && deliveredAt) return OrderStatusType.DONE
          return OrderStatusType.CORRUPTED
        },
        needs: { deliveredAt: true, validatedAt: true }
      }
    }
  }
})

export default prisma
