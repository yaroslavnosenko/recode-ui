export const Navigation = () => {
  const menus = ['Drinks', 'Coffee', 'Hookahs', 'Deserts', 'Pizza']

  const MenuNav = () => {
    return (
      <div className="border-t">
        <div className="max-w-2xl mx-auto flex overflow-x-scroll scrollbar-hide">
          {menus.map((m) => (
            <div
              key={m}
              className="py-4 px-6 text-slate-400  first:text-black font-medium"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const OrderButton = () => {
    return (
      <div className="max-w-2xl bg-slate-200 mx-auto flex overflow-x-scroll scrollbar-hide p-6 pb-8 rounded-t-2xl">
        <button
          type="button"
          className="text-white w-full bg-slate-800 hover:bg-slate-900 active:bg-slate-700 font-medium rounded-full text-sm px-5 py-4 text-center"
        >
          Make Order
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/80 fixed bottom-0 w-full left-0 backdrop-blur-lg">
      <MenuNav />
      <OrderButton />
    </div>
  )
}
