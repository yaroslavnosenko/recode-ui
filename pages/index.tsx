import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiDollarSign,
  FiGift,
  FiPocket,
  FiZap,
} from 'react-icons/fi'

import { CtaButton, Feature, Layout, Phone, Pricing } from 'components/web'
import { ROUTES } from 'configs'

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <Container maxW="container.xl" py={{ base: 16, md: 32 }}>
        <Box textAlign="center" maxW="container.sm" mx="auto">
          <Heading as="h1" fontWeight="600" size="2xl">
            Recode{' '}
            <Text as="span" color="teal.500">
              QR Code
            </Text>{' '}
            Menu
          </Heading>
          <Text mt="4" fontSize="lg" opacity={0.5}>
            A utility-first CSS framework packed with classes like flex and
            rotate-90 that can be composed to build any design, directly in your
            markup.
          </Text>
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          mt="8"
          className="flex flex-col md:flex-row gap-4 justify-center items-start mt-8"
        >
          <Box w={{ base: 'full', md: 'auto' }}>
            <CtaButton />
          </Box>
          <Link
            className="hover:opacity-70 active:opacity-50 inline-flex font-medium items-center justify-between py-3 px-5 text-md dark:text-white"
            href={ROUTES.QR('demo')}
          >
            <Button
              rounded="full"
              size="lg"
              bg="transparent"
              fontWeight="500"
              rightIcon={<FiArrowRight strokeWidth={3} />}
            >
              See Demo
            </Button>
          </Link>
        </Stack>
      </Container>

      {/* FEATURES */}
      <Container maxW="5xl" mb={{ base: 16, md: 32 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="16"
          alignItems="center"
          className="max-w-5xl items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <Box textAlign={{ base: 'start', md: 'end' }}>
            <Feature
              title={'QR code menu increases sales'}
              icon={
                <Icon
                  as={FiDollarSign}
                  strokeWidth={1.5}
                  color="teal.500"
                  boxSize={10}
                />
              }
              body={
                <>
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </>
              }
            />
            <Feature
              title={'Enhancing Customer Experience'}
              icon={
                <Icon
                  as={FiGift}
                  strokeWidth={1.5}
                  color="teal.500"
                  boxSize={10}
                />
              }
              body={
                <>
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </>
              }
            />
          </Box>
          <Box>
            <Phone>
              <NextImage
                className="rounded-3xl"
                alt="Screenshot Dark"
                src={'/s-d.png'}
                width="280"
                height="560"
              />
            </Phone>
          </Box>
        </SimpleGrid>
      </Container>

      <Container>
        <div className="mb-16 md:mb-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-32">
          <div className="hidden md:block">
            <Phone>
              <NextImage
                className="rounded-3xl"
                alt="Screenshot Light"
                src={'/s-l.png'}
                width="280"
                height="560"
              />
            </Phone>
          </div>

          <div>
            <Feature
              title={'Saving business resources'}
              icon={
                <FiPocket className="text-brand w-10 h-10" strokeWidth={1.5} />
              }
              body={
                <>
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </>
              }
            />
            <Feature
              title={'Attracting new customers'}
              icon={
                <FiZap className="text-brand w-10 h-10" strokeWidth={1.5} />
              }
              body={
                <>
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </>
              }
            />
            <div className="md:inline-block mt-12">
              <CtaButton />
            </div>
          </div>
        </div>
      </Container>

      {/* PRICING */}
      <Container>
        <div
          className="py-16 md:py-32 max-w-5xl items-center mx-auto border-t dark:border-t-dark-700 border-t-light-300"
          id="pricing"
        >
          <Pricing />
        </div>
      </Container>
    </Layout>
  )
}
