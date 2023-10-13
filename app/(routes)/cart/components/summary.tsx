'use client'

import { useEffect } from 'react'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import useCart from '@/lib/hooks/use-cart'

export default function Summary() {
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)
  const searchParams = useSearchParams()

  const freeShipping = 39.9
  const shippingCosts = 4.9

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Order placed successfully!')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Order canceled!')
    }
  }, [removeAll, searchParams])

  const totalPrice = items.reduce((acc, item) => {
    return acc + +item.price
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    })

    window.location = response.data.url
  }

  return (
    <div className="rounded-lg bg-accent p-4 lg:col-span-5">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between text-base">
          <p className="">Subtotal</p>
          <Currency value={totalPrice} />
        </div>
        <div className="flex justify-between text-sm">
          <p>Delivery costs</p>
          <span>{totalPrice >= freeShipping ? '$0' : `$${shippingCosts.toFixed(2)}`}</span>
        </div>
        <hr className="bg-gray-300" />
        <div className="flex justify-between text-base">
          <p className="font-medium">Total amount (incl. VAT)</p>
          <Currency value={totalPrice >= freeShipping ? totalPrice : totalPrice + shippingCosts} />
        </div>
        <Button
          disabled={items.length === 0}
          onClick={onCheckout}
          variant="destructive"
          className="w-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}
