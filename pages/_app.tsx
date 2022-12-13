import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import { Chakra } from 'components/chakra'
import '@fontsource/outfit/variable.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Chakra>
  )
}
