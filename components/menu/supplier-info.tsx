interface Props {}

export const SupplierInfo = ({}: Props) => {
  return (
    <div>
      {/* {profilePhoto && (
        <div
          className="aspect-[3/1] bg-light-200 dark:bg-dark-800 bg-cover bg-center rounded-lg mb-4"
          style={{ backgroundImage: 'url(' + profilePhoto + ')' }}
        />
      )} */}
      <h1 className="text-3xl font-medium mb-4">{}</h1>
      <div className="flex flex-wrap gap-4 gap-y-2 opacity-50">
        {/* {address && (
          <div className="flex items-center gap-2 ">
            <FiMapPin className="w-5 h-5" />
            <p>{address}</p>
          </div>
        )} */}
        {/* {phone && (
          <div className="flex items-center gap-2">
            <FiPhone className="w-5 h-5" />
            <p>{phone}</p>
          </div>
        )} */}
        {/* {wifi && (
          <div className="flex items-center gap-2">
            <FiWifi className="w-5 h-5" />
            <p>{wifi}</p>
          </div>
        )} */}
      </div>
    </div>
  )
}
