import React from 'react'

import { OrderRow, Product } from 'types'

interface MenuContextProps {
  order: OrderRow[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
}

export const MenuContext = React.createContext<MenuContextProps>({
  order: [],
  addProduct: () => {},
  removeProduct: () => {},
})
