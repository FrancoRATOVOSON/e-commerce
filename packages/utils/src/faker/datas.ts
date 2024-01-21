import { NonEmptyArrayOf } from "../types"

export interface TagType {
  slug: string
  label: string
}

interface DataCategoryType {
  slug: string
  name: string
  tags: NonEmptyArrayOf<TagType>
}

export const DATA_CATEGORIES:Array<DataCategoryType> = [
  {
    slug: "informatique",
    name: "Informatique",
    tags: [
      {
        slug: "ecrans",
        label: "Écran"
      },
      {
        slug: "laptop",
        label: "Laptop"
      },
      {
        slug: "gpu",
        label: "Carte Graphique"
      },
      {
        slug: "cpu",
        label: "Processeur"
      },
      {
        slug: "phone",
        label: "Téléphone"
      }
    ]
  },
  {
    slug: "mode",
    name: "Mode",
    tags: [
      {
        slug: "haut",
        label: "Haut"
      },
      {
        slug: "robe",
        label: "Robe"
      },
      {
        slug: "homme",
        label: "Homme"
      },
      {
        slug: "femme",
        label: "Femme"
      }
    ]
  },
  {
    slug: "electromenagers",
    name: "Éléctroménagers",
    tags: [
      {
        slug: "aspirateur",
        label: "Asppirateur"
      },
      {
        slug: "cuisine",
        label: "Cuisine"
      },
      {
        slug: "menage",
        label: "Ménage"
      },
      {
        slug: "frigo",
        label: "Frigo"
      }
    ]
  },
  {
    slug: "bricolage",
    name: "Bricolage",
    tags: [
      {
        slug: "tournevis",
        label: "Tournevis"
      },
      {
        slug: "cle",
        label: "Clé"
      },
      {
        slug: "construction",
        label: "Construction"
      },
      {
        slug: "plomberie",
        label: "Plomberie"
      }
    ]
  },
  {
    slug: "meubles-&-deco",
    name: "Meubles & Déco",
    tags: [
      {
        slug: "salon",
        label: "Salon"
      },
      {
        slug: "chambre",
        label: "Chambre"
      },
      {
        slug: "vase",
        label: "Vase"
      },
      {
        slug: "lumière",
        label: "Lumière"
      }
    ]
  }
]