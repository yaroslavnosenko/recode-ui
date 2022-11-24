import { FiPhone, FiMapPin, FiWifi } from 'react-icons/fi'

export const SupplierInfo = () => {
  const image = 'http://www.encoretheclub.sk/img/lo1.jpg'

  return (
    <div>
      <div
        className="aspect-[3/1] bg-slate-100 bg-cover bg-center rounded-lg mb-4"
        style={{ backgroundImage: 'url(' + image + ')' }}
      />
      <h1 className="text-3xl font-medium mb-4">Encore Lounge Bar</h1>
      <div className="flex flex-wrap gap-4 gap-y-2 text-slate-400">
        <div className="flex items-center gap-2 ">
          <FiMapPin className="w-5 h-5" />
          <p>Sabinovská 1, 080 01 Prešov, Slovakia</p>
        </div>
        <div className="flex items-center gap-2">
          <FiPhone className="w-5 h-5" />
          <p>+421 908 400 200</p>
        </div>
        <div className="flex items-center gap-2">
          <FiWifi className="w-5 h-5" />
          <p>encore_wifi</p>
        </div>
      </div>
    </div>
  )
}
