import React, { PropsWithChildren, useState } from 'react'

import { Category, MenuOrderRow, Product } from 'mock/types'

interface MenuContextProps {
  categories: Category[]
  order: MenuOrderRow[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  getQuantity: (id: string) => number
  getSum: () => number
}

export const MenuContext = React.createContext<MenuContextProps>({
  categories: [],
  order: [],
  addProduct: () => {},
  removeProduct: () => {},
  getQuantity: () => 0,
  getSum: () => 0,
})

interface MenuProviderProps {
  categories: Category[]
}

export const MenuProvider = ({
  categories,
  ...props
}: PropsWithChildren<MenuProviderProps>) => {
  const [order, setOrder] = useState<MenuOrderRow[]>([])

  const addProduct = (product: Product) => {
    const row: MenuOrderRow | undefined = order.find(
      (row) => row.product.id === product.id
    )
    if (!row) {
      setOrder([...order, { product, quantity: 1 }])
    } else {
      for (const row of order) {
        if (row.product.id === product.id) {
          row.quantity = row.quantity + 1
        }
      }
      setOrder([...order])
    }
  }

  const removeProduct = (id: string) => {
    const row: MenuOrderRow | undefined = order.find(
      (row) => row.product.id === id
    )
    if (!row) return
    const other = order.filter((some) => some !== row)
    if (row.quantity === 1) {
      setOrder([...other])
    } else {
      for (const row of order) {
        if (row.product.id === id) {
          row.quantity = row.quantity - 1
        }
      }
      setOrder([...order])
    }
  }

  const getQuantity = (id: string) =>
    order.find((row) => row.product.id === id)?.quantity || 0

  const getSum = () =>
    order
      .map((row) => row.quantity * row.product.price)
      .reduce((a, b) => a + b, 0)

  return (
    <MenuContext.Provider
      value={{
        categories,
        order,
        addProduct,
        removeProduct,
        getQuantity,
        getSum,
      }}
      {...props}
    />
  )
}
