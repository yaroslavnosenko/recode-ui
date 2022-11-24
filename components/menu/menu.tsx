import { Category } from 'components/menu'
import { Menu as MenuType } from 'types'

interface Props {
  menu: MenuType
}

export const Menu = ({ menu }: Props) => {
  const { categories } = menu

  return (
    <div className="grid grid-cols-1 divide-y divide-dark-800">
      {categories &&
        categories.map((cat) => <Category key={cat.id} category={cat} />)}
    </div>
  )
}
