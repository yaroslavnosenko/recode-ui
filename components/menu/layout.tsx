import { PropsWithChildren } from 'react'

export const Layout = (props: PropsWithChildren) => (
  <div className="max-w-2xl mx-auto px-6 py-10" {...props} />
)
