export const Menu = () => {
  const image = 'http://www.encoretheclub.sk/img/lo4.jpg'
  const image1 = 'http://www.encoretheclub.sk/img/lo5.jpg'

  const Category = () => {
    return (
      <div className="pt-8">
        <h2 className="text-xl font-bold">Drinks</h2>
        <div className="grid grid-cols-1 divide-y divide-slate-100">
          <div className="py-5 flex items-center gap-2">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1">Raspberry mousse</h3>
              <p className="text-slate-400">
                Raspberry mousse with cream and raspberry syrup
              </p>
              <p className="mt-1">$3,25</p>
            </div>
            <div
              className="bg-slate-100 bg-cover bg-center rounded-lg h-20 w-20"
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          </div>

          <div className="py-5 flex items-center gap-2">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1">Vanilla ice cream</h3>
              <p className="text-slate-400">
                Vanilla ice cream with chocolate filling
              </p>
              <p className="mt-1">$2,00</p>
            </div>
            <div
              className="bg-slate-100 bg-cover bg-center rounded-lg h-20 w-20"
              style={{ backgroundImage: 'url(' + image1 + ')' }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 divide-y divide-slate-100">
      <Category />
      <Category />
    </div>
  )
}
