import { SaasProvider } from '@saas-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../theme'

import '@fontsource/outfit'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider theme={theme}>
      <Component {...pageProps} />
    </SaasProvider>
  )
}
