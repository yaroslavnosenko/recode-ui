import { FiMinus, FiPlus } from 'react-icons/fi'

export const PlusMinus = () => {
  return (
    <div className="mt-4 flex gap-6">
      <button className="bg-dark-700 flex-1 flex items-center justify-center rounded-md py-2">
        <FiMinus strokeWidth={3} />
      </button>
      <button className="bg-brand-600 flex-1 flex items-center justify-center rounded-md py-2">
        <FiPlus strokeWidth={3} />
      </button>
    </div>
  )
}
