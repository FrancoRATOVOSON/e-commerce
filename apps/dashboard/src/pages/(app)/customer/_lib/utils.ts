import { OrderDetails } from 'database/types'
import { PriceDetails } from 'utils/types'

import { FormatedShopperDetails, OrderOverview } from './types'

function detailsToFormatedDetails(
  orders: Array<OrderDetails>
): FormatedShopperDetails {
  // console.time('formating')
  // console.log('array size :', orders.length)
  const formatedResult: FormatedShopperDetails = { categories: new Map() }

  function findOrCreateCategory(label: string) {
    if (!formatedResult.categories.has(label))
      formatedResult.categories.set(label, {
        amount: 0,
        quantity: 0,
        tags: new Map()
      })

    return formatedResult.categories.get(label)
  }

  orders.forEach(order => {
    order.products.forEach(productOrder => {
      const { category, price, quantity, tags } = productOrder

      const categoryFound = findOrCreateCategory(category)
      if (categoryFound) {
        categoryFound.quantity += quantity
        categoryFound.amount += quantity * price.value

        tags.forEach(tag => {
          const tagEntry = categoryFound.tags.get(tag)
          if (!tagEntry)
            categoryFound.tags.set(tag, {
              amount: quantity * price.value,
              quantity
            })
          else {
            tagEntry.quantity += quantity
            tagEntry.amount += quantity * price.value
          }
        })
      }
    })
  })

  // console.timeEnd('formating')
  return formatedResult
}

function detailToOverview(order: OrderDetails): OrderOverview {
  const { deliveredAt, id, products, status, validatedAt } = order

  let amount: PriceDetails = { currency: 'MGA', value: 0 }
  let itemCount = 0
  let productCount = 0

  products.forEach(({ discount, price: { currency, value }, quantity }) => {
    itemCount += quantity
    productCount += 1
    amount = {
      currency,
      value: amount.value + quantity * value * (discount / 100)
    }
  })
  return {
    amount,
    deliveredAt,
    id,
    itemCount,
    productCount,
    status,
    validatedAt
  }
}

function detailsToOrderOverview(
  orders: Array<OrderDetails>
): Array<OrderOverview> {
  return orders.map(order => detailToOverview(order))
}

export { detailToOverview, detailsToFormatedDetails, detailsToOrderOverview }
