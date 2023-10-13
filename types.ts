export type Billboard = {
  id: string
  label: string
  imageUrl: string
}

export type Category = {
  id: string
  name: string
  billboard: Billboard
  billboardId: string
}

export type Product = {
  id: string
  name: string
  description: string
  category: Category
  price: number
  images: Image[]
  size: Size
  color: Color
  isFeatured: boolean
  inStock: boolean
}

export type Image = {
  id: string
  url: string
}

export type Size = {
  id: string
  name: string
  value: string
}

export type Color = {
  id: string
  name: string
  value: string
}
