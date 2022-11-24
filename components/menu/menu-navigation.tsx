import { Category } from 'types'

interface Props {
  categories: Category[]
}

export const MenuNavigation = ({ categories }: Props) => {
  return (
    <div className="max-w-2xl mx-auto flex overflow-x-scroll scrollbar-hide">
      {categories.map((category) => (
        <div
          className="py-4 px-6 opacity-50 first:opacity-100 first:font-medium whitespace-nowrap"
          key={category.id}
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}
