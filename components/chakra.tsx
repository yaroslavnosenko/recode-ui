import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react'

import { theme } from 'theme'

export const Chakra = ({ cookies, children }: any) => (
  <ChakraProvider
    theme={theme}
    colorModeManager={
      typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
    }
  >
    {children}
  </ChakraProvider>
)

export const getServerSideProps = ({ req }: any) => {
  return {
    props: { cookies: req?.headers?.cookie ?? '' },
  }
}
