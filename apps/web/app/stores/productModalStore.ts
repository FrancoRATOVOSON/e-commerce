import { ProductCardInfos } from "utils/types";
import { create } from "zustand";
import React, { createRef } from "react";

interface ProductModalState {
  isOpen: boolean
  modalRef: React.RefObject<HTMLDialogElement>
  product: ProductCardInfos
}

interface ProductModalAction {
  openModal: (product: ProductCardInfos, action: () => void) => void
  closeModal: (action: () => void) => void
}

const initialProduct:ProductCardInfos = {
  productId: '',
  image: '',
  name: '',
  price: {
    value: 0,
    currency: 'MGA'
  }
}

const useProductModalStore = create<ProductModalState & ProductModalAction>(set => ({
  isOpen: false,
  modalRef: createRef(),
  product: initialProduct,
  openModal: (product, action) => {
    set({ product, isOpen: true })
    action()
  },
  closeModal: (action) => {
    action()
    set({ isOpen: false })
  }
}))

export const useProductModal = () => {
  const isOpen = useProductModalStore(state => state.isOpen)
  const product = useProductModalStore(state => state.product)
  const closeModal = useProductModalStore(state => state.closeModal)
  const modalRef = useProductModalStore(state => state.modalRef)

  return { isOpen, product, closeModal, modalRef }
}

export const useOpenProductModal = () => {
  const openModal = useProductModalStore(state => state.openModal)
  const modalRef = useProductModalStore(state => state.modalRef)
  
  return { openModal, modalRef }
}
