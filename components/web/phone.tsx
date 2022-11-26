import { PropsWithChildren } from 'react'

interface Props {
  colorClasses?: string
}

export const Phone = ({ children, colorClasses }: PropsWithChildren<Props>) => {
  const color: string = colorClasses
    ? colorClasses
    : 'bg-gradient-to-r from-brand via-brand to-yellow-500'
  return (
    <div
      className={
        'flex justify-center items-center aspect-[288/568] w-full bg-red-100 mx-auto rounded-3xl p-1 ' +
        color
      }
      style={{ maxWidth: 288 }}
    >
      {children}
    </div>
  )
}
