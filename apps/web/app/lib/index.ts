import { faker } from "@faker-js/faker"

const productTitle = faker.commerce.product()
const productImage = faker.image.urlLoremFlickr({
  category: productTitle,
  height: 250,
  width: 300
})

const productSample = {
  productId: faker.string.uuid(),
  title: productTitle,
  price: {
    value: faker.number.int({
      min: 1000,
      max: 1_000_000
    }),
    currency: 'MGA'
  },
  image: productImage
}

function getAnArrayOf<T>(pattern: () => T, length: number): T[] {
    return new Array<T>(length).fill(pattern());
}

function getProduct() {
  const productTitle = faker.commerce.product()
  const productImage = faker.image.urlLoremFlickr({
    category: productTitle,
    height: 250,
    width: 300
  })

  return {
    productId: faker.string.uuid(),
    title: productTitle,
    price: {
      value: faker.number.int({
        min: 1000,
        max: 1_000_000
      }),
      currency: 'MGA'
    },
    image: productImage
  }
}

export const getProductList = (n:number=50) => getAnArrayOf(getProduct,n)