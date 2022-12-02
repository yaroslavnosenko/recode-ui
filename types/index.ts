export interface OrderRow {
  product: Product
  quantity: number
}

export interface Product {
  id: string
  price: number
  name: string
  description?: string
  photo?: string
}

export interface Category {
  id: string
  name: string
  products: Product[]
}

export interface Menu {
  id: string
  categories: Category[]
}

export interface Supplier {
  id: string
  name: string
  profilePhoto?: string
  address?: string
  phone?: string
  wifi?: string
  menu: Menu | null
}

export * from './generated/graphql'
