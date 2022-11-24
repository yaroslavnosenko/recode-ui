import { Product } from 'components/menu'
import { Category as CategoryType } from 'types'

interface Props {
  category: CategoryType
}

export const Category = ({ category }: Props) => {
  const { name, products } = category
  return (
    <div className="pt-8">
      <h2 className="text-xl font-bold text-brand-500">{name}</h2>
      <div className="grid grid-cols-1 divide-y divide-dark-800">
        {products.map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}
