import { ChakraProvider, Heading } from '@chakra-ui/react'

import { theme } from '../../theme'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading>App</Heading>
    </ChakraProvider>
  )
}
