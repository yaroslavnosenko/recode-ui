import { PropsWithChildren } from 'react'

import { Footer, Header } from 'components/web'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
