import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Footer, Header } from 'components/web'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex={1} pt="20">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
