import { useCloseDialog, useShowDialog } from 'ui'
import { ProductCardInfos } from 'utils/types'
import { create } from 'zustand'

import { productModal } from './contexts'

interface ProductModalState {
  product: ProductCardInfos
}

interface ProductModalAction {
  openModal: (product: ProductCardInfos) => void
}

const initialProduct: ProductCardInfos = {
  image: '',
  name: '',
  price: {
    currency: 'MGA',
    value: 0
  },
  productId: ''
}

export const useProductModalStore = create<
  ProductModalState & ProductModalAction
>(set => ({
  openModal: product => {
    set({ product })
  },
  product: initialProduct
}))

export function useProductModal() {
  const { product } = useProductModalStore()

  return { product }
}

export function useOpenProductModal() {
  const openModalAction = useProductModalStore(state => state.openModal)
  const openModal = useShowDialog(productModal)

  return (product: ProductCardInfos) => {
    openModalAction(product)
    openModal()
  }
}

export function useCloseProductModal() {
  const closeModal = useCloseDialog(productModal)

  return closeModal
}
