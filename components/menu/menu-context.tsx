import React, { PropsWithChildren, useState } from 'react'

import { MenuOrderRow, Product } from 'mock/types'

interface MenuContextProps {
  order: MenuOrderRow[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  getQuantity: (id: string) => number
  getSum: () => number
}

export const MenuContext = React.createContext<MenuContextProps>({
  order: [],
  addProduct: () => {},
  removeProduct: () => {},
  getQuantity: () => 0,
  getSum: () => 0,
})

export const MenuProvider = (props: PropsWithChildren) => {
  const [order, setOrder] = useState<MenuOrderRow[]>([])

  const addProduct = (product: Product) => {
    const row: MenuOrderRow | undefined = order.find(
      (row) => row.product.id === product.id
    )
    if (!row) {
      setOrder([...order, { product, quantity: 1 }])
    } else {
      const other = order.filter((some) => some !== row)
      setOrder([...other, { ...row, quantity: row.quantity + 1 }])
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
      setOrder([...other, { ...row, quantity: row.quantity - 1 }])
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
      value={{ order, addProduct, removeProduct, getQuantity, getSum }}
      {...props}
    />
  )
}
