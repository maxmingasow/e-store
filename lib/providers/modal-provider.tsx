'use client'

import { useEffect, useState } from 'react'

import PreviewModal from '@/components/ui/preview-modal'

export default function ModalProvider() {
  const [isMOunted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMOunted) return null

  return (
    <>
      <PreviewModal />
    </>
  )
}
