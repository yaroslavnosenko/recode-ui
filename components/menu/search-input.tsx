import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

export const SearchInput = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div className="relative">
      <FiSearch className="opacity-50 h-12 w-12 absolute left-0 top-0 p-3" />
      <input
        className="py-3 px-12 block w-full border-none rounded-md bg-dark-700 placeholder:text-white placeholder:opacity-50 focus:ring-2 focus:ring-brand-500"
        type="text"
        name="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search in menu..."
      />
      {!!value && (
        <FiX
          className="opacity-50 h-12 w-12 absolute right-0 top-0 p-3 cursor-pointer"
          onClick={() => setValue('')}
        />
      )}
    </div>
  )
}
