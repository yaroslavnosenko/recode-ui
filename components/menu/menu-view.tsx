import { CategoryView } from 'components/menu'
import { Menu } from 'types'

interface Props {
  menu: Menu
}

export const MenuView = ({ menu }: Props) => {
  const { categories } = menu
  return (
    <div className="grid grid-cols-1 divide-y divide-dark-800">
      {categories &&
        categories.map((cat) => <CategoryView key={cat.id} category={cat} />)}
    </div>
  )
}
