'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { type Color, type Size } from '@/types'

type Props = {
  data: (Size | Color)[]
  name: string
  valueKey: string
}

export default function Filter({ data, name, valueKey }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id,
    }
    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    )

    router.push(url)
  }
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />

      <div className="flex flex-wrap items-center gap-2">
        {data.map((filter) => (
          <Button
            variant="secondary"
            key={filter.id}
            className={cn(
              'rounded-full hover:bg-primary hover:text-secondary',
              selectedValue === filter.id && 'bg-primary text-secondary',
            )}
            onClick={() => onClick(filter.id)}
          >
            {filter.value.startsWith('#') ? filter.name : filter.value}
          </Button>
        ))}
      </div>
    </div>
  )
}
