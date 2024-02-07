import { ProductCardInfos } from 'utils/types'
import { create } from 'zustand'

type ProductList = Array<ProductCardInfos & { total: number }>

type CartStoreState = {
  productList: ProductList
}

type CartStoreActions = {
  emptyList: () => void
  removeProduct: (productId: string) => void
  setProductList: (list: ProductCardInfos[]) => void
  setProductQuantity: (productId: string, quantity: number) => void
}

const useCartStore = create<CartStoreState & CartStoreActions>()(set => ({
  emptyList: () => set(state => ({ ...state, productList: [] })),
  productList: [],
  removeProduct: (productId: string) => {
    set(state => ({
      ...state,
      productList: state.productList.filter(
        product => product.productId !== productId
      )
    }))
  },
  setProductList: list =>
    set(state => ({
      ...state,
      productList: list.map(product => ({
        ...product,
        total: product.price.value * (product.quantity || 1)
      }))
    })),
  setProductQuantity: (productId: string, quantity: number) =>
    set(state => ({
      ...state,
      productList: state.productList.map(product => {
        if (product.productId !== productId) return product

        return { ...product, quantity }
      })
    }))
}))

function useProductList() {
  return useCartStore(store => ({
    productList: store.productList,
    setProductList: store.setProductList
  }))
}

function useProductQuantitySetter() {
  return useCartStore(store => ({
    remove: store.removeProduct,
    set: store.setProductQuantity
  }))
}

function useProductTotal() {
  const productList = useCartStore(store => store.productList)

  return productList.reduce(
    (prev, { price: { value }, quantity }) => prev + value * (quantity || 1),
    0
  )
}

function useClearProductCart() {
  return useCartStore(store => store.emptyList)
}

export {
  useClearProductCart,
  useProductList,
  useProductQuantitySetter,
  useProductTotal
}
