import { useState } from 'react'

import { Category } from 'components/menu'
import { Menu as MenuType, Product } from 'types'

interface Props {
  menu: MenuType
}

interface SelectedProduct {
  product: Product
  count: number
}

export const Menu = ({ menu }: Props) => {
  const { categories } = menu
  const [products, setProducts] = useState<SelectedProduct[]>([])
  const onAddProduct = (product: Product) => {}
  const onRemoveProduct = (id: string) => {}

  return (
    <div className="grid grid-cols-1 divide-y divide-dark-800">
      {categories &&
        categories.map((cat) => <Category key={cat.id} category={cat} />)}
    </div>
  )
}
