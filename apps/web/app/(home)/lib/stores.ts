import { ProductData } from 'database/types'
import { useCloseDialog, useShowDialog } from 'ui/components'
import { create } from 'zustand'

import { alertModal, productModal } from './contexts'

interface ProductModalState {
  product: ProductData
}

interface ProductModalAction {
  openModal: (product: ProductData) => void
}

const initialProduct: ProductData = {
  id: '',
  image: { alt: '', src: '' },
  name: '',
  price: {
    currency: 'MGA',
    value: 0
  }
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

export function useCloseProductModal() {
  const closeModal = useCloseDialog(productModal)

  return closeModal
}

export function useCloseAlertModal() {
  const closeModal = useCloseDialog(alertModal)

  return closeModal
}

export function useOpenAlertModal() {
  const openModal = useShowDialog(alertModal)

  return openModal
}
