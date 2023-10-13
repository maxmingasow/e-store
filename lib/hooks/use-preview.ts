import { create } from 'zustand'

import { type Product } from '@/types'

type Props = {
  isOpen: boolean
  data?: Product
  onOpen: (data: Product) => void
  onClose: () => void
}

const usePreviewModal = create<Props>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal
