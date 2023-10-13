'use client'

import { PlusCircle } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { type Color, type Size } from '@/types'

import Filter from './filter'

type Props = {
  sizes: Size[]
  colors: Color[]
}

export default function MobileFilters({ sizes, colors }: Props) {
  return (
    <div className="lg:hidden">
      <Dialog>
        <DialogTrigger className={cn(buttonVariants(), 'gap-2')}>
          Filters
          <PlusCircle size={20} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
