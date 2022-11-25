import { PropsWithChildren } from 'react'

import { Footer, Header } from 'components/web'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
