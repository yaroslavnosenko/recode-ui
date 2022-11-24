import { useContext } from 'react'

import { MenuContext } from './menu-context'

import { PlusMinus } from 'components/menu'
import { Product } from 'types'

interface Props {
  product: Product
}

export const ProductView = ({ product }: Props) => {
  const { id, name, photo, description, price } = product
  const { order, addProduct, removeProduct } = useContext(MenuContext)

  const row = order.find((row) => row.product.id === id)
  const quantity = row?.quantity || 0

  return (
    <div className="py-5 relative">
      <div
        className="flex items-center gap-4 active:opacity-50 cursor-pointer"
        onClick={() => addProduct(product)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            {quantity > 0 && (
              <div className="bg-brand-600 px-2 text-white font-bold rounded-md">
                {quantity}
              </div>
            )}
            <h3 className="font-medium text-lg">{name}</h3>
          </div>
          {description && <p className="opacity-50">{description}</p>}
          <p className="mt-1 text-brand-600">${price}</p>
        </div>
        {photo && (
          <div
            className="bg-cover bg-light-200 dark:bg-dark-800 bg-center rounded-lg h-20 w-20"
            style={{ backgroundImage: 'url(' + photo + ')' }}
          />
        )}
      </div>
      {quantity > 0 && (
        <>
          <PlusMinus
            onPlus={() => addProduct(product)}
            onMinus={() => removeProduct(id)}
          />
          <div className="h-full w-1 bg-brand-500 absolute top-0 -left-6" />
        </>
      )}
    </div>
  )
}
