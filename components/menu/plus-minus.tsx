import { FiMinus, FiPlus } from 'react-icons/fi'

interface Props {
  onPlus: () => void
  onMinus: () => void
}

export const PlusMinus = ({ onMinus, onPlus }: Props) => {
  return (
    <div className="mt-4 flex gap-6 md:max-w-xs">
      <button
        className="bg-dark-700 flex-1 flex items-center justify-center rounded-md py-2 active:opacity-50"
        onClick={onMinus}
      >
        <FiMinus strokeWidth={3} className="opacity-50" />
      </button>
      <button
        className="bg-brand-600 flex-1 flex items-center justify-center rounded-md py-2 active:opacity-50"
        onClick={onPlus}
      >
        <FiPlus strokeWidth={3} />
      </button>
    </div>
  )
}
