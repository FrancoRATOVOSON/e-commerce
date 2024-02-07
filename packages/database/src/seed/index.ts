/* eslint-disable no-console */
import { DATA_CATEGORIES, getProductList, getProductPageInfosFrom } from 'utils/faker'
import { generateRandom } from 'utils'
import prisma from '../client'

async function seed() {
  DATA_CATEGORIES.forEach(async ({name, slug, tags: cTags}) => {
    // First create a set of tags for the category
    const category = await prisma.category.upsert({
      where: {slug, name},
      update: {},
      create: { name, slug, tags: { create: cTags }},
    })
    const tags = await prisma.tag.findMany({ where: { categorySlug: category.slug } })

    // Then generate random a list of 2 to 5 products
    getProductList(generateRandom(2,5)).forEach(async (product) => {
      const {name: pName, description, image, price: {value, currency}, productId: id} = getProductPageInfosFrom(product)

      // For each product generated, add it manualy to the database
      const createdProduct = await prisma.product.upsert({
        where: { id },
        update: {},
        create: {
          id, name: pName, description,
          image: typeof image === "string" ? image : image.src,
          price: value, currency,
          category: {
            connect: {
              slug: category.slug
            }
          }
        }
      })

      // Then, for each product, randomly assign (or not) a tag from the category tag list above
      tags.forEach(async (tag) => {
        if(generateRandom(0,10) % 2 === 0) return

        await prisma.productTags.upsert({
          where: { productId_tagSlug: {
            productId: createdProduct.id,
            tagSlug: tag.slug
          } },
          update: {},
          create: {
            productId: createdProduct.id,
            categorySlug: tag.categorySlug,
            tagSlug: tag.slug
          }
        })
      })

    })
  })
}

seed().then(() => {
  console.log("Database seed done");
}).catch(async e => {
  console.log("Error when seeding the database:");
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})