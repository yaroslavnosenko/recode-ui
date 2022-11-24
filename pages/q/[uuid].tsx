import { supplier } from '__mock/data'
import { Layout, SupplierInfo, SearchInput, Menu } from 'components/menu'

export default function QR() {
  return (
    <Layout>
      <SupplierInfo supplier={supplier} />
      <div className="py-6">
        <SearchInput />
      </div>
      {supplier.menu && <Menu menu={supplier.menu} />}
      {/* <Navigation /> */}
    </Layout>
  )
}
