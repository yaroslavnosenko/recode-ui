import { FiBell } from 'react-icons/fi'

export const OrderButton = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 pt-2">
      <button className="bg-brand-600 w-full flex-1 flex items-center justify-center rounded-md py-2 active:opacity-50 font-medium">
        <FiBell strokeWidth={3} />
        <p className="ml-2">Make order</p>
      </button>
    </div>
  )
}