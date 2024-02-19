import { getAnArrayOf } from 'utils'
import { faker } from 'utils/faker'
import { NonEmptyArrayOf } from 'utils/types'

import { ProductData, TagType } from '../types'

interface DataCategoryType {
  name: string
  slug: string
  tags: NonEmptyArrayOf<TagType>
}

export const DATA_CATEGORIES: Array<DataCategoryType> = [
  {
    name: 'Informatique',
    slug: 'informatique',
    tags: [
      {
        label: 'Écran',
        slug: 'ecrans'
      },
      {
        label: 'Laptop',
        slug: 'laptop'
      },
      {
        label: 'Carte Graphique',
        slug: 'gpu'
      },
      {
        label: 'Processeur',
        slug: 'cpu'
      },
      {
        label: 'Téléphone',
        slug: 'phone'
      }
    ]
  },
  {
    name: 'Mode',
    slug: 'mode',
    tags: [
      {
        label: 'Haut',
        slug: 'haut'
      },
      {
        label: 'Robe',
        slug: 'robe'
      },
      {
        label: 'Homme',
        slug: 'homme'
      },
      {
        label: 'Femme',
        slug: 'femme'
      }
    ]
  },
  {
    name: 'Éléctroménagers',
    slug: 'electromenagers',
    tags: [
      {
        label: 'Asppirateur',
        slug: 'aspirateur'
      },
      {
        label: 'Cuisine',
        slug: 'cuisine'
      },
      {
        label: 'Ménage',
        slug: 'menage'
      },
      {
        label: 'Frigo',
        slug: 'frigo'
      }
    ]
  },
  {
    name: 'Bricolage',
    slug: 'bricolage',
    tags: [
      {
        label: 'Tournevis',
        slug: 'tournevis'
      },
      {
        label: 'Clé',
        slug: 'cle'
      },
      {
        label: 'Construction',
        slug: 'construction'
      },
      {
        label: 'Plomberie',
        slug: 'plomberie'
      }
    ]
  },
  {
    name: 'Meubles & Déco',
    slug: 'meubles-&-deco',
    tags: [
      {
        label: 'Salon',
        slug: 'salon'
      },
      {
        label: 'Chambre',
        slug: 'chambre'
      },
      {
        label: 'Vase',
        slug: 'vase'
      },
      {
        label: 'Lumière',
        slug: 'lumière'
      }
    ]
  }
]

export function getRandomDescription() {
  return faker.lorem.paragraph(2)
}

export function fakeProductData(): ProductData {
  const productName = faker.commerce.productName()
  const productImage = faker.image.urlLoremFlickr({
    height: 250,
    width: 300
  })

  return {
    id: faker.string.uuid(),
    image: {
      alt: productName,
      src: productImage
    },
    name: productName,
    price: {
      currency: 'MGA',
      value:
        faker.number.int({
          max: 1_000,
          min: 1
        }) * 1_000
    }
  }
}

export const fakeProductList = (n: number = 10) =>
  getAnArrayOf(fakeProductData, n)
