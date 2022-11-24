import { Product } from 'components/menu'
import { Category as CategoryType, Product as ProductType } from 'types'

interface Props {
  category: CategoryType
  onAddProduct: (product: ProductType) => void
  onRemoveProduct: (id: string) => void
}

export const Category = ({ category, ...callbacks }: Props) => {
  const { name, products } = category
  return (
    <div className="pt-8">
      <h2 className="text-xl font-bold text-brand-500">{name}</h2>
      <div className="grid grid-cols-1 divide-y divide-dark-800">
        {products.map((prod) => (
          <Product product={prod} key={prod.id} {...callbacks} />
        ))}
      </div>
    </div>
  )
}
