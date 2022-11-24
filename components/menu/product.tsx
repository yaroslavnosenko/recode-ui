import { Product as ProductType } from 'types'

interface Props {
  product: ProductType
}

export const Product = ({ product }: Props) => {
  const { name, photo, description, price } = product
  return (
    <div className="py-5 flex items-center gap-4">
      <div className="flex-1">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
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
  )
}
