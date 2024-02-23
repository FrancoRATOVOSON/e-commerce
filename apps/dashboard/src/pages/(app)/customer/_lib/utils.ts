import { OrderDetails } from 'database/types'

import { FormatedShopperDetails } from './types'

function detailsToFormatedDetails(
  orders: Array<OrderDetails>
): FormatedShopperDetails {
  const formatedResult: FormatedShopperDetails = { categories: [] }

  orders.forEach(order => {
    order.products.forEach(productOrder => {
      const { category, price, quantity, tags } = productOrder

      const existingCategoryIndex = formatedResult.categories.findIndex(
        formatedCategory => formatedCategory.label === category
      )
      if (existingCategoryIndex === -1)
        formatedResult.categories.push({
          amount: quantity * price.value,
          label: category,
          quantity,
          tags: []
        })
      else {
        formatedResult.categories[existingCategoryIndex].quantity += quantity
        formatedResult.categories[existingCategoryIndex].amount +=
          quantity * price.value
      }

      const categoryIndex = formatedResult.categories.findIndex(
        formatedCategory => formatedCategory.label === category
      )

      tags.forEach(tag => {
        const tagIndex = formatedResult.categories[
          categoryIndex
        ].tags.findIndex(existingTag => existingTag.label === tag)

        if (tagIndex === -1)
          formatedResult.categories[categoryIndex].tags.push({
            amount: quantity * price.value,
            label: tag,
            quantity
          })
        else {
          formatedResult.categories[categoryIndex].tags[tagIndex].quantity +=
            quantity
          formatedResult.categories[categoryIndex].tags[tagIndex].amount +=
            quantity * price.value
        }
      })
    })
  })

  return formatedResult
}

// eslint-disable-next-line import/prefer-default-export
export { detailsToFormatedDetails }
