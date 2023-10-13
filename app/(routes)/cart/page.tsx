'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import Container from '@/components/ui/container'
import useCart from '@/lib/hooks/use-cart'
import { cn } from '@/lib/utils'

import CartItem from './components/cart-item'
import Summary from './components/summary'

export const dynamic = 'force-dynamic'

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="bg-background">
      <Container>
        <div className="px-4 py-20">
          <h2 className="text-2xl text-foreground">Shopping Cart</h2>
          {cart.items.length === 0 ? (
            <div className="space-y-4 text-center">
              <p>No items in shopping cart!</p>
              <Link href="/" className={cn(buttonVariants({ variant: 'secondary' }))}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-x-12 lg:grid-cols-12 lg:items-start">
              <ul className="lg:col-span-7">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
              <Summary />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
