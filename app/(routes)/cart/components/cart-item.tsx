'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import useCart from '@/lib/hooks/use-cart'
import { Product } from '@/types'

type Props = {
  data: Product
}

export default function CartItem({ data }: Props) {
  const cart = useCart()

  const handleRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-40 sm:w-40">
        <Image
          src={data.images[0].url}
          alt={`${data.name} Product image`}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex w-full justify-between px-4">
        <div>
          <h3 className="text-lg">{data.name}</h3>
          <Currency value={data.price} />
        </div>
        <div>
          <div className="flex items-start justify-center gap-x-2">
            <p>{data.size.value}</p>
            <p className="border-l border-neutral-200 pl-2">{data.color.name}</p>
          </div>
        </div>
        <div>
          <Button onClick={handleRemove} variant="outline" size="icon">
            <X size={20} />
          </Button>
        </div>
      </div>
    </li>
  )
}
