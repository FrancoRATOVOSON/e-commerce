export type SectionType = {
  amount: number
  label: string
  quantity: number
}

export type FormatedShopperDetails = {
  categories: Array<SectionType & { tags: Array<SectionType> }>
}
