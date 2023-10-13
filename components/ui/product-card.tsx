'use client'

import { MouseEventHandler } from 'react'

import { ExpandIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import useCart from '@/lib/hooks/use-cart'
import usePreviewModal from '@/lib/hooks/use-preview'
import { type Product } from '@/types'

type Props = {
  item: Product
}

export default function ProductCard({ item }: Props) {
  const cart = useCart()
  const router = useRouter()

  const previewModal = usePreviewModal()

  const handleClick = () => {
    router.push(`/product/${item.id}`)
  }

  const handlePreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(item)
  }

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(item)
  }

  return (
    <div onClick={handleClick} className="group overflow-hidden bg-card p-3 shadow sm:rounded-lg">
      <div className="relative aspect-square rounded-lg bg-accent">
        <Image
          src={item.images?.[0]?.url}
          alt="Product Image"
          sizes="(min-width: 1340px) 265px, (min-width: 1040px) calc(25.71vw - 74px), (min-width: 780px) calc(50vw - 82px), calc(100vw - 112px)"
          className="aspect-square rounded-lg object-cover"
          fill
        />
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-foreground/30 bg-opacity-50">
            <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
              <Button onClick={handlePreview} variant="rounded" size="icon">
                <ExpandIcon size={20} />
              </Button>
              <Button onClick={handleAddToCart} variant="rounded" size="icon">
                <ShoppingCartIcon size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <h4 className="text-lg font-bold text-foreground">{item.name}</h4>
        <p className="text-sm text-accent-foreground">{item.category?.name}</p>
        <Currency value={item?.price} />
      </div>
    </div>
  )
}
