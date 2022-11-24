import { Box, Container, Divider } from '@chakra-ui/react'
import { SearchInput } from '@saas-ui/react'

import { Menu, SupplierInfo } from 'components/menu'

export default function QR() {
  return (
    <Box py={[4, 4, 8]}>
      <Container>
        <SupplierInfo />
        <Divider my="6" />
        <SearchInput />
        <Divider my="6" />
      </Container>
      <Menu />
    </Box>
  )
}
