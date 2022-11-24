import { Menu, Navigation, SupplierInfo } from 'components/menu'

export default function QR() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-8 pb-52 text-slate-900 dark:bg-slate-800 dark:text-slate-50">
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
      <Navigation />
    </div>
  )
}
