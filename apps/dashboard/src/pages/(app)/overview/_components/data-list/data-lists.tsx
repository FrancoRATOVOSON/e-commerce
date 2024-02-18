import React from 'react'

import { getBuyList, getSaleList } from 'utils/faker'

import DataList from './data-list'

const sales = getSaleList(3)

function BestSalesList() {
  return (
    <DataList
      data={sales}
      description="Les produits les mieux vendus"
      title="Les meilleurs ventes"
    />
  )
}

const shoppers = getBuyList(3)

function BestShopperList() {
  return (
    <DataList
      data={shoppers}
      description="Vos clients les plus fidèles"
      title="Les meilleurs acheteurs"
    />
  )
}

export { BestSalesList, BestShopperList }
