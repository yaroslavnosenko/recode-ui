import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { ROUTES } from 'configs'

const LINKS = [
  { href: ROUTES.HOME, text: 'Product' },
  { href: ROUTES.CONTACTS, text: 'Support' },
  { href: ROUTES.HOME + '#pricing', text: 'Pricing' },
  { href: ROUTES.CONTACTS, text: 'Contacts' },
]

export const Header = () => {
  const bg = useColorModeValue('whiteAlpha.700', 'dark.900')
  return (
    <Box
      as="header"
      pos="fixed"
      w="full"
      zIndex={55}
      backdropFilter="auto"
      backdropBlur="lg"
      bg={bg}
    >
      <Container maxW="container.xl">
        <Grid
          h="20"
          alignItems="center"
          gridTemplateColumns={{ base: '1fr 1fr', md: '1fr auto 1fr' }}
        >
          <NextLink className="font-medium text-2xl" href={ROUTES.HOME}>
            <Heading size="lg" fontSize="24" fontWeight="500">
              Recode
            </Heading>
          </NextLink>
          <HStack display={{ base: 'none', md: 'flex' }} gap={6}>
            {LINKS.map((link) => (
              <NextLink
                key={link.text}
                href={link.href}
                legacyBehavior
                passHref
              >
                <Link
                  opacity={0.8}
                  _hover={{ textDecor: 'none', opacity: 0.5 }}
                >
                  {link.text}
                </Link>
              </NextLink>
            ))}
          </HStack>
          <HStack justifyContent="flex-end" spacing={4}>
            <NextLink href={ROUTES.AUTH} legacyBehavior passHref>
              <Link _hover={{ textDecor: 'none', opacity: 0.5 }}>Sign in</Link>
            </NextLink>
            <NextLink
              className="ml-6 text-brand underline hover:no-underline underline-offset-4"
              href={ROUTES.QR('demo')}
              legacyBehavior
              passHref
            >
              <Link
                textDecor="underline"
                color="teal.500"
                _hover={{ textDecor: 'none' }}
              >
                Demo
              </Link>
            </NextLink>
          </HStack>
        </Grid>
      </Container>
    </Box>
  )
}
