'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'
import { type Product } from '@/types'

type Props = {
  title: string
  items: Product[]
}

export default function ProductsList({ title, items }: Props) {
  return (
    <div className="space-y-5">
      <h3 className="text-center text-3xl md:text-left">{title}</h3>
      {items.length === 0 && <NoResults />}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        scrollbar={{ draggable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="p-1">
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
