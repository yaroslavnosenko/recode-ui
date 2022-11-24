import { Menu, SupplierInfo } from 'components/menu'

export default function QR() {
  return (
    <div className="container max-w-2xl mx-auto px-6 my-8">
      <SupplierInfo />
      <div className="py-6">
        <input
          type="text"
          name="search"
          placeholder="Search in menu..."
          className="bg-slate-100 border-none block w-full rounded-md focus:ring-0"
        />
      </div>
      <Menu />
    </div>
  )
}
