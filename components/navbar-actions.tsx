'use client'

import { useEffect, useState } from 'react'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import useCart from '@/lib/hooks/use-cart'

export default function NavBarActions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        variant="ghost"
        size="icon"
        className="group relative"
      >
        <ShoppingBag size={24} className="text-foreground transition" />

        {cart.items.length > 0 && (
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs text-white">
            {cart.items.length}
          </span>
        )}
      </Button>
    </div>
  )
}
