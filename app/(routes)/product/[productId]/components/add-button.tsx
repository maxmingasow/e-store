'use client'

import { MouseEventHandler } from 'react'

import { ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import useCart from '@/lib/hooks/use-cart'
import { Product } from '@/types'

type Props = {
  item: Product
}

export default function AddButton({ item }: Props) {
  const cart = useCart()

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(item)
  }

  return (
    <Button onClick={handleAddToCart} className="gap-x-2 rounded-full transition hover:scale-105">
      Add to cart
      <ShoppingCartIcon size={20} />
    </Button>
  )
}
