import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="container px-6 mx-auto">{children}</div>
}
