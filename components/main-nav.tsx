'use client'

import { useState } from 'react'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { type Category } from '@/types'

import { Button } from './ui/button'

type Props = {
  data: Category[]
}

export default function MainNav({ data }: Props) {
  const [open, setOpen] = useState(true)

  const pathname = usePathname()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    name: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="py-4">
      <Button
        onClick={() => setOpen(!open)}
        variant="ghost"
        size="icon"
        className="group relative flex md:hidden"
      >
        {open ? (
          <Menu size={24} className="text-foreground transition" />
        ) : (
          <X size={24} className="text-foreground transition" />
        )}
      </Button>
      <ul
        className={cn(
          'z-10 flex w-3/5 flex-col transition-transform max-md:absolute max-md:inset-x-0 max-md:right-0 max-md:h-screen max-md:bg-secondary max-md:p-12 md:flex-row md:gap-x-4',
          open && 'max-md:-translate-x-full',
        )}
      >
        {routes.map((route) => (
          <li className="max-md:p-4" key={route.href}>
            <Link
              onClick={() => setOpen(!open)}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-black max-md:text-primary',
                route.active ? 'border-b border-foreground/40 text-foreground' : 'text-neutral-500',
              )}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
