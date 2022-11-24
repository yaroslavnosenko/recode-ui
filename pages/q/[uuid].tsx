import { Box, Container, Divider } from '@chakra-ui/react'
import { SearchInput } from '@saas-ui/react'
import { useRouter } from 'next/router'

import { Menu, SupplierInfo } from 'components/menu'

export default function QR() {
  const router = useRouter()
  const { uuid } = router.query
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
