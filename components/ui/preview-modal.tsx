'use client'

import ProductGallery from '@/components/product-gallery'
import ProductInfo from '@/components/product-info'
import Modal from '@/components/ui/modal'
import usePreviewModal from '@/lib/hooks/use-preview'

export default function PreviewModal() {
  const previewModal = usePreviewModal()
  const product = usePreviewModal((state) => state.data)

  if (!product) return null

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 sm:grid-cols-12">
        <div className="sm:col-span-4 lg:col-span-5">
          <ProductGallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo data={product} />
        </div>
      </div>
    </Modal>
  )
}
