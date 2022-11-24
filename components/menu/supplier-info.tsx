import { FiPhone, FiMapPin, FiWifi } from 'react-icons/fi'

import { Supplier } from 'types'

interface Props {
  supplier: Supplier
}

export const SupplierInfo = ({ supplier }: Props) => {
  const { name, address, phone, wifi, profilePhoto } = supplier
  return (
    <div>
      {profilePhoto && (
        <div
          className="aspect-[3/1] bg-dark-800 bg-cover bg-center rounded-lg mb-4"
          style={{ backgroundImage: 'url(' + profilePhoto + ')' }}
        />
      )}
      <h1 className="text-3xl font-medium mb-4">{name}</h1>
      <div className="flex flex-wrap gap-4 gap-y-2 opacity-50">
        {address && (
          <div className="flex items-center gap-2 ">
            <FiMapPin className="w-5 h-5" />
            <p>{address}</p>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-2">
            <FiPhone className="w-5 h-5" />
            <p>{phone}</p>
          </div>
        )}
        {wifi && (
          <div className="flex items-center gap-2">
            <FiWifi className="w-5 h-5" />
            <p>{wifi}</p>
          </div>
        )}
      </div>
    </div>
  )
}
