import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { ROUTES } from 'configs'

const LINKS = [
  { href: '/', text: 'Privacy Policy' },
  { href: '/', text: 'Terms' },
  { href: ROUTES.CONTACTS, text: 'Support' },
]

export const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 1, 2]} gap={4} py={6}>
          <HStack gap={4}>
            {LINKS.map((link) => (
              <NextLink
                key={link.text}
                href={link.href}
                legacyBehavior
                passHref
              >
                <Link opacity={0.5}>{link.text}</Link>
              </NextLink>
            ))}
          </HStack>
          <Text opacity={0.5} textAlign={['start', 'start', 'end']}>
            Copyright@Recode 2022
          </Text>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
