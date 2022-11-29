import { ChakraProvider, useBoolean } from '@chakra-ui/react'
import { NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { useSession, signIn, signOut } from 'next-auth/react'
import { NextRequest } from 'next/server'
import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from '../../theme'

import { Layout } from 'components/app'

interface AppProps {
  token?: string
}

const App: NextPage<AppProps> = ({ token }) => {
  const { data: session } = useSession()
  const [mounted, setMounted] = useBoolean(false)
  useEffect(() => {
    setMounted.on()
  }, [setMounted])

  return !mounted ? (
    <>Hello</>
  ) : (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          {token}
          {session && (
            <>
              Signed in as {session.user?.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )}
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export async function getServerSideProps(context: any) {
  const req = context.req as NextRequest
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({ req, secret, raw: true })
  return { props: { token } }
}

export default App
