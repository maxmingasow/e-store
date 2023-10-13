'use client'

import { useEffect, useState } from 'react'

import { formatter } from '@/lib/utils'

type Props = {
  value?: string | number
}

export function Currency({ value }: Props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  return <span className="block font-semibold">{formatter.format(Number(value))}</span>
}
