export type SectionType = {
  amount: number
  quantity: number
}

export type FormatedShopperDetails = {
  categories: Map<string, SectionType & { tags: Map<string, SectionType> }>
}
