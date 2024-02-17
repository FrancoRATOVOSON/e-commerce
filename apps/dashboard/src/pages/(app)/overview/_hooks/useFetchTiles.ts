/* eslint-disable perfectionist/sort-objects */

import {
  BaggageClaim,
  DollarSign,
  IconNode,
  Percent,
  Truck,
  Users
} from 'ui/icons'
import { InfoTileData } from 'utils/types'

const tylesContent: Record<string, InfoTileData & { icon: IconNode }> = {
  incomes: {
    icon: DollarSign,
    label: 'Revenus total',
    value: {
      currency: 'MGA',
      value: 18_540_000
    }
  },
  shoppers: {
    icon: Users,
    label: 'Nombre de souscription',
    value: '3 000 Clients'
  },
  orders: {
    icon: Truck,
    label: 'Commandes effectuées',
    value: '53 540 Commandes'
  },
  average_order_price: {
    icon: Percent,
    label: `Prix moyen d'une commande`,
    value: {
      currency: 'MGA',
      value: 750_000
    }
  },
  average_order_article: {
    icon: BaggageClaim,
    label: `Nombre d'articles par commande`,
    value: '3.7 articles'
  }
}

export default function useFetchTiles() {
  return Object.values(tylesContent)
}
