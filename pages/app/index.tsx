import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, useBoolean } from '@chakra-ui/react'
import { NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Categories, Me, Settings, Start } from 'components/app'
import { APP_ROUTES, ROUTES } from 'configs'
import { TokenContext } from 'hooks'
import { createApolloClient } from 'libs'
import { theme } from 'theme'

interface AppProps {
  token?: string
}

const App: NextPage<AppProps> = ({ token }) => {
  const [mounted, setMounted] = useBoolean(false)
  useEffect(() => {
    setMounted.on()
  }, [setMounted])

  if (!mounted || !token) return null
  const client = createApolloClient(token)
  return (
    <TokenContext.Provider value={token}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <BrowserRouter basename={ROUTES.APP}>
            <Routes>
              <Route
                path={APP_ROUTES.APP}
                element={<Navigate to={APP_ROUTES.ORDERS} replace />}
              />
              <Route path={APP_ROUTES.START} element={<Start />} />
              <Route path={APP_ROUTES.ORDERS} element={<Settings />} />
              <Route path={APP_ROUTES.CATEGORIES} element={<Categories />} />
              <Route path={APP_ROUTES.PRODUCTS} element={<Settings />} />
              <Route path={APP_ROUTES.EMPLOYEES} element={<Settings />} />
              <Route path={APP_ROUTES.PLACEMENTS} element={<Settings />} />
              <Route path={APP_ROUTES.SETTINGS} element={<Settings />} />
              <Route path={APP_ROUTES.ME} element={<Me />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </ApolloProvider>
    </TokenContext.Provider>
  )
}

export async function getServerSideProps(context: any) {
  const req = context.req as NextRequest
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({ req, secret, raw: true })
  return token
    ? { props: { token } }
    : {
        redirect: {
          permanent: false,
          destination: ROUTES.AUTH,
        },
      }
}

export default App
