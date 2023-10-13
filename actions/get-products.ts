import qs from 'query-string'

import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

type Query = {
  categoryId?: string
  sizeId?: string
  colorId?: string
  isFeatured?: boolean
  inStock?: boolean
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
      inStock: query.inStock,
    },
  })

  const res = await fetch(url)
  return res.json()
}

export default getProducts
