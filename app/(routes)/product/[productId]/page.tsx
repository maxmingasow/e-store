import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import ProductGallery from '@/components/product-gallery'
import ProductInfo from '@/components/product-info'
import Container from '@/components/ui/container'
import ProductsList from '@/components/ui/product-list'

type Props = {
  params: {
    productId: string
  }
}

export const dynamic = 'force-dynamic'

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.productId)
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
    inStock: true,
  })

  return (
    <div className="bg-background">
      <Container>
        <div className="px-4 py-10">
          {/* Grid Layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Gallery */}
            <ProductGallery images={product.images} />
            {/* Product Info */}
            <ProductInfo data={product} />
          </div>
          <hr className="my-10" />
          {/* Suggested Products */}
          <ProductsList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}
