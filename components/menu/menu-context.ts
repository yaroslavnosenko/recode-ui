import React from 'react'

import { Order_Row, Product } from 'types'

interface MenuContextProps {
  order: Order_Row[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
}

export const MenuContext = React.createContext<MenuContextProps>({
  order: [],
  addProduct: () => {},
  removeProduct: () => {},
})
