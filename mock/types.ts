export interface Product {
  id: string
  name: string
  description: string
  price: number
  image?: string
}

export interface Category {
  id: string
  name: string
  products: Product[]
}

export interface MenuOrderRow {
  product: Product
  quantity: number
}
