import Image from 'next/image'

import getBillboards from '@/actions/get-billboards'
import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import Container from '@/components/ui/container'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'

import Filter from './components/filter'
import MobileFilters from './components/mobile-filter'

type Props = {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export const dynamic = 'force-dynamic'

export default async function CategoryPage({ params, searchParams }: Props) {
  const products = await getProducts({
    inStock: true,
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const billboards = await getBillboards()
  const category = await getCategory(params.categoryId)
  const billboard = billboards.find((billboard) => billboard.id === category.billboardId)

  return (
    <div className="bg-background px-4">
      <Container>
        <div className="relative mx-auto my-12 h-96 w-full max-w-[120rem] overflow-hidden rounded-2xl">
          {billboard && (
            <Image
              src={billboard.imageUrl}
              alt="Billboard Image"
              sizes="(min-width: 1360px) 1280px, calc(98.85vw - 45px)"
              className="object-cover object-top"
              priority
              fill
            />
          )}
          <div className="absolute w-full">
            <div className="item-center mx-auto mt-20 flex max-w-max flex-col bg-primary/40 px-12 py-8 text-center ">
              <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-primary-foreground drop-shadow-xl md:max-w-2xl  md:text-5xl">
                {billboard?.label}
              </h2>
            </div>
          </div>
        </div>
        <div className="px-4 pb-24">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="mt-4 grid gap-8 lg:grid-cols-5">
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
            <div className="lg:col-span-4">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                  <ProductCard key={product.id} item={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
