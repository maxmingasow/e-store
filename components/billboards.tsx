'use client'

import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'nuka-carousel'

import { buttonVariants } from '@/components/ui/button'
import { type Billboard, type Category } from '@/types'

type Props = {
  items: Billboard[]
  categories: Category[]
}

export default function Billboards({ items, categories }: Props) {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={5000}
      wrapAround={true}
      speed={1000}
      animation="fade"
      withoutControls={true}
    >
      {items.map((billboard) => (
        <div
          key={billboard.id}
          className="relative mx-auto my-12 h-96 w-full max-w-[120rem] overflow-hidden sm:h-[60vh] md:h-[60vh] lg:rounded-2xl"
        >
          <Image
            src={billboard.imageUrl}
            alt="Billboard Image"
            sizes="(min-width: 2040px) 1920px, calc(94.19vw + 17px)"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute w-full">
            <div className="mx-auto mt-20 flex max-w-max flex-col items-center bg-primary/40 py-8 text-center md:px-12 ">
              <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-primary-foreground drop-shadow-xl md:max-w-2xl  md:text-5xl">
                {billboard.label}
              </h2>
              <Link
                href={`/category/${categories.find(
                  (category) => category.billboardId === billboard.id,
                )?.id}`}
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
