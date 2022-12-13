import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useActiveMenu } from 'react-active-menu'

import {
  MerchantInfo,
  SearchInput,
  Toolbar,
  Categories,
  MenuProvider,
  OrderModal,
} from 'components/menu'
import { DATA } from 'mock/data'

export default function MenuPage() {
  const { registerSection, registerTrigger, activeId } = useActiveMenu({
    smooth: true,
  })

  const [showOrder, setShowOrder] = useState<boolean>(false)

  return (
    <MenuProvider categories={DATA}>
      <Box pb="40">
        <MerchantInfo />
        <SearchInput />
        <Categories registerSection={registerSection} />
        <Toolbar
          registerTrigger={registerTrigger}
          active={activeId}
          onMakeOrder={() => setShowOrder(true)}
        />
        {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
        <Box pb="env(safe-area-inset-bottom)" />
      </Box>
    </MenuProvider>
  )
}

export { getServerSideProps } from 'components/chakra'

// import {
//   Layout,
//   SupplierInfo,
//   SearchInput,
//   MenuView,
//   Navigation,
//   MenuNavigation,
//   OrderButton,
// } from 'components/menu'
// import { MenuContext } from 'components/menu/menu-context'
// import { Order_Row, Product } from 'types'

// export default function MenuPage() {
//   const [order, setOrder] = useState<Order_Row[]>([])

//   const addProduct = (product: Product) => {
//     // const row: Order_Row | undefined = order.find(
//     //   (row) => row.id === product.id
//     // )
//     // if (!row) {
//     //   setOrder([...order, { product, quantity: 1 }])
//     // } else {
//     //   const other = order.filter((some) => some !== row)
//     //   setOrder([...other, { ...row, quantity: row.quantity + 1 }])
//     // }
//   }

//   const removeProduct = (id: string) => {
//     const row: OrderRow | undefined = order.find((row) => row.product.id === id)
//     if (!row) return
//     const other = order.filter((some) => some !== row)
//     if (row.quantity === 1) {
//       setOrder([...other])
//     } else {
//       setOrder([...other, { ...row, quantity: row.quantity - 1 }])
//     }
//   }

//   return (
//     <MenuContext.Provider value={{ order, addProduct, removeProduct }}>
//       <Layout>
//         <SupplierInfo supplier={supplier} />
//         <div className="py-6">
//           <SearchInput />
//         </div>
//         {supplier.menu && <MenuView menu={supplier.menu} />}
//         <Navigation>
//           <MenuNavigation categories={supplier.menu?.categories || []} />
//           {order.length !== 0 && <OrderButton />}
//         </Navigation>
//       </Layout>
//     </MenuContext.Provider>
//   )
// }
