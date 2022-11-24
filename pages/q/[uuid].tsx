import { useState } from 'react'

import { supplier } from '__mock/data'
import {
  Layout,
  SupplierInfo,
  SearchInput,
  MenuView,
  Navigation,
  MenuNavigation,
  OrderButton,
} from 'components/menu'
import { MenuContext } from 'components/menu/menu-context'
import { OrderRow, Product } from 'types'

export default function MenuPage() {
  const [order, setOrder] = useState<OrderRow[]>([])

  const addProduct = (product: Product) => {
    const row: OrderRow | undefined = order.find(
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
    const row: OrderRow | undefined = order.find((row) => row.product.id === id)
    if (!row) return
    const other = order.filter((some) => some !== row)
    if (row.quantity === 1) {
      setOrder([...other])
    } else {
      setOrder([...other, { ...row, quantity: row.quantity - 1 }])
    }
  }

  return (
    <MenuContext.Provider value={{ order, addProduct, removeProduct }}>
      <Layout>
        <SupplierInfo supplier={supplier} />
        <div className="py-6">
          <SearchInput />
        </div>
        {supplier.menu && <MenuView menu={supplier.menu} />}
        <Navigation>
          <MenuNavigation categories={supplier.menu?.categories || []} />
          {order.length !== 0 && <OrderButton />}
        </Navigation>
      </Layout>
    </MenuContext.Provider>
  )
}
