import getBillboard from '@/actions/get-billboards'
import getCategories from '@/actions/get-categories'
import getProducts from '@/actions/get-products'
import Billboards from '@/components/billboards'
import Container from '@/components/ui/container'
import ProductList from '@/components/ui/product-list'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await getProducts({ isFeatured: true, inStock: true })
  const billboards = await getBillboard()
  const categories = await getCategories()

  return (
    <main className="space-y-10 pb-10">
      <Billboards items={billboards} categories={categories} />
      <Container>
        <div className="py-10 md:px-4">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
    </main>
  )
}
