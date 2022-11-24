import { ProductView } from 'components/menu'
import { Category } from 'types'

interface Props {
  category: Category
}

export const CategoryView = ({ category }: Props) => {
  const { name, products } = category
  return (
    <div className="pt-8">
      <h2 className="text-xl font-medium text-brand-600">{name}</h2>
      <div className="grid grid-cols-1 divide-y dark:divide-dark-800 divide-light-200">
        {products.map((prod) => (
          <ProductView product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}
