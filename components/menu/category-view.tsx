import { ProductView } from 'components/menu'
import { Category } from 'types'

interface Props {
  category: Category
}

export const CategoryView = ({ category }: Props) => {
  const { name, products } = category
  return (
    <div className="pt-8">
      <h2 className="text-xl text-brand-500">{name}</h2>
      <div className="grid grid-cols-1 divide-y divide-dark-800">
        {products.map((prod) => (
          <ProductView product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}
