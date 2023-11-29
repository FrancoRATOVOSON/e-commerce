import { faker } from '@faker-js/faker'
import Card from "./Card"

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

export default <Card
  product={productSample}
  addToCartAction={() => {}}
  seeDetailsAction={() => {}}
/>