import { OrderDetails } from 'database/types'

import { FormatedShopperDetails } from './types'

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

// eslint-disable-next-line import/prefer-default-export
export { detailsToFormatedDetails }
