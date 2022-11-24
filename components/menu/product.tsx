import { PlusMinus } from 'components/menu'
import { Product as ProductType } from 'types'

interface Props {
  product: ProductType
  onAddProduct: (product: ProductType) => void
  onRemoveProduct: (id: string) => void
}

export const Product = ({ product }: Props) => {
  const { name, photo, description, price } = product
  return (
    <div className="py-5 relative">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-brand-600 px-2 font-bold rounded-md">1</div>
            <h3 className="font-medium text-lg">{name}</h3>
          </div>
          {description && <p className="opacity-50">{description}</p>}
          <p className="mt-1 text-brand-600">${price}</p>
        </div>
        {photo && (
          <div
            className="bg-cover bg-dark-800 bg-center rounded-lg h-20 w-20"
            style={{ backgroundImage: 'url(' + photo + ')' }}
          />
        )}
      </div>
      <PlusMinus />
      <div className="h-full w-0.5 bg-brand-500 absolute top-0 -left-6" />
    </div>
  )
}
