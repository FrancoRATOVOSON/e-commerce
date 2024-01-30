'use client'

import React from 'react'

import { useCloseAlertModal } from '@/(home)/lib'
import { useRouter } from 'next/navigation'
import { Alert } from 'ui'

export default function NotConnectedAlert() {
  const router = useRouter()
  const closeModal = useCloseAlertModal()

  return (
    <Alert
      action={() => router.push('/login')}
      actionLabel="Se connecter"
      cancelAction={() => closeModal()}
      description={`Vous devez être connecté pour créer un panier et y ajouter un élément. Voulez-vous continuer ?`}
      title={`Vous devez d'abord vous connecter`}
    />
  )
}
