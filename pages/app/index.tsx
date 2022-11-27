import { ChakraProvider, useBoolean } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from '../../theme'

import { Layout } from 'components/app'

export default function App() {
  const [mounted, setMounted] = useBoolean(false)
  useEffect(() => setMounted.on, [setMounted])

  return !mounted ? null : (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout></Layout>
      </Router>
    </ChakraProvider>
  )
}
