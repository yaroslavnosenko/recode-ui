import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

import { CtaButton } from './cta-button'
import { Phone } from './phone'

import { ROUTES } from 'configs'

const Feature = ({ children }: PropsWithChildren) => {
  return (
    <HStack mt="4" alignItems="center" spacing="4">
      <Box color="teal.500">
        <FiCheckCircle strokeWidth={3} />
      </Box>
      <Text>{children}</Text>
    </HStack>
  )
}

export const Pricing = () => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <SimpleGrid spacing={16} columns={{ base: 1, md: 2 }} alignItems="center">
      <Box>
        <Heading textTransform="uppercase" size="md" color="teal.500">
          Pricing
        </Heading>
        <Text opacity={0.5} mt="4">
          Working with digital menu is easier. Loading of the menu is faster.
          There is more useful information in digital menu.
        </Text>
        <HStack py="8" alignItems="baseline">
          <Text fontSize="5xl" fontWeight="500">
            $59
          </Text>
          <Text opacity={0.5} ms="2">
            per month
          </Text>
        </HStack>

        <Box display="inline-block" mb="8">
          <CtaButton />
        </Box>

        <Feature>An ability to remotely edit your menu</Feature>
        <Feature>
          Unlimited photos and description loading for your QR code menu
        </Feature>
        <Feature>
          Additional restaurant information feature (Address, Phone number, Map,
          Wi-Fi password)
        </Feature>
        <Feature>Both a mobile and a desktop version of the menu</Feature>
      </Box>

      <Box>
        <Phone bgGradient="none" bg={bg}>
          <Stack px="4" textAlign="center">
            <Text mb="2">Scan QR Code bellow to see demo</Text>
            <Image
              alt="Demo QR Code"
              src={'/qr-demo.svg'}
              width="280"
              height="280"
            />
            <NextLink href={ROUTES.QR('demo')}>
              <Button
                fontWeight="500"
                rightIcon={<FiArrowRight strokeWidth={3} />}
                bg="transparent"
              >
                See Demo
              </Button>
            </NextLink>
          </Stack>
        </Phone>
      </Box>
    </SimpleGrid>
  )
}
