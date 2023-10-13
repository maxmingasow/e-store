'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { type Category } from '@/types'

type Props = {
  data: Category[]
}

export default function MainNav({ data }: Props) {
  const pathname = usePathname()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    name: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'border-b border-foreground/40 text-foreground' : 'text-neutral-500',
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  )
}
