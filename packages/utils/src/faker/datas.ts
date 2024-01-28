import { NonEmptyArrayOf } from '../types'

export interface TagType {
  label: string
  slug: string
}

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
