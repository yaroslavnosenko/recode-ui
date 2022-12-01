import { signOut } from 'next-auth/react'

import { Layout } from 'components/app'

export const Me = () => {
  return (
    <Layout>
      <button onClick={() => signOut()}>Sign Out</button>
    </Layout>
  )
}
