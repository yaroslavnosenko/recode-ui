import { Supplier } from 'types'

export const supplier: Supplier = {
  id: 'id',
  name: 'Encore Lounge Bar',
  address: 'Sabinovská 1, 080 01 Prešov, Slovakia',
  wifi: 'encore_wifi',
  phone: '+421 908 400 200',
  profilePhoto: 'http://www.encoretheclub.sk/img/lo1.jpg',
  menu: {
    id: 'menu_id',
    categories: [
      {
        id: 'cat1',
        name: 'Ice creams',
        products: [
          {
            id: 'prod1',
            name: 'Vanilla ice cream',
            price: 2.5,
            photo: 'http://www.encoretheclub.sk/img/lo5.jpg',
            description: 'Vanilla ice cream with chocolate filling',
          },
          {
            id: 'prod2',
            name: 'Berry ice cream',
            price: 5.99,
            description: 'Natural ice cream made from berries',
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Deserts',
        products: [
          {
            id: 'prod3',
            name: 'Brownie with raspberries',
            price: 16.7,
            photo: 'http://www.encoretheclub.sk/img/lo4.jpg',
          },
          { id: 'prod4', name: 'Cheesecake', price: 19.9 },
        ],
      },
    ],
  },
}
