/* eslint-disable no-console */
import { generateRandom } from 'utils'

import prisma from '../client'
import { DATA_CATEGORIES, fakeProductList } from '../faker'

async function seed() {
  DATA_CATEGORIES.forEach(async ({ name, slug, tags: cTags }) => {
    // First create a set of tags for the category
    const category = await prisma.category.upsert({
      create: { name, slug, tags: { create: cTags } },
      update: {},
      where: { name, slug }
    })
    const tags = await prisma.tag.findMany({
      where: { categorySlug: category.slug }
    })

    // Then generate random a list of 2 to 5 products
    fakeProductList(generateRandom(2, 5)).forEach(async product => {
      const {
        description,
        id,
        image,
        name: pName,
        price: { currency, value }
      } = product

      // For each product generated, add it manualy to the database
      const createdProduct = await prisma.product.upsert({
        create: {
          category: {
            connect: {
              slug: category.slug
            }
          },
          currency,
          description: description || 'N/A',
          id,
          image: typeof image === 'string' ? image : image.src,
          name: pName,
          price: value
        },
        update: {},
        where: { id }
      })

      // Then, for each product, randomly assign (or not) a tag from the category tag list above
      tags.forEach(async tag => {
        if (generateRandom(0, 10) % 2 === 0) return

        await prisma.productTags.upsert({
          create: {
            categorySlug: tag.categorySlug,
            productId: createdProduct.id,
            tagSlug: tag.slug
          },
          update: {},
          where: {
            productId_tagSlug: {
              productId: createdProduct.id,
              tagSlug: tag.slug
            }
          }
        })
      })
    })
  })
}

seed()
  .then(() => {
    console.log('Database seed done')
  })
  .catch(async e => {
    console.log('Error when seeding the database:')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
