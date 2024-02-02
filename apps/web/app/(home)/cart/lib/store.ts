import { create } from 'zustand'

type ProductId = string

type ProductList = Set<ProductId>

type ProductQuantityMap = Record<ProductId, number>

type ValidatedProductQuantityMap<S extends ProductList> = Record<
  S extends Set<infer T> ? T : never,
  number
>

type CartStoreState = {
  productQuantityMap: ProductQuantityMap
  productSet: ProductList
}

type CartStoreActions = {
  removeProduct: (productId: string) => void
  setProductQuantity: (productId: ProductId, quantity: number) => void
}

const useCartStore = create<CartStoreState & CartStoreActions>()(set => ({
  productQuantityMap: {},
  productSet: new Set([]),
  removeProduct: (productId: string) => {
    set(state => {
      if (!state.productSet.has(productId)) return { ...state }

      const newProductSet = new Set(state.productSet)
      newProductSet.delete(productId)
      const { [productId]: _, ...newQuantityMap } = state.productQuantityMap

      return {
        ...state,
        productQuantityMap: newQuantityMap,
        productSet: newProductSet
      }
    })
  },
  setProductQuantity: (productId: string, quantity: number) => {
    set(state => {
      const productSet = new Set(state.productSet)
      productSet.add(productId)

      const productQuantityMap: ValidatedProductQuantityMap<
        typeof state.productSet
      > = {
        ...state.productQuantityMap
      }
      productQuantityMap[productId] = quantity

      return { ...state, productQuantityMap, productSet }
    })
  }
}))

function useProductQuantitySetter() {
  return useCartStore(store => ({
    remove: store.removeProduct,
    set: store.setProductQuantity
  }))
}

function useCartQuantityMap() {
  return useCartStore(store => store.productQuantityMap)
}

export { useCartQuantityMap, useProductQuantitySetter }
