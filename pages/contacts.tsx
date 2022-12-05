import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { Layout } from 'components/web'

export default function Contacts() {
  return (
    <Layout>
      <Container maxW="container.xl" py={{ base: '16', md: '32' }}>
        <Box textAlign="center" maxW="container.md" mx="auto">
          <Heading as="h1" fontWeight="600" size="2xl">
            Support.{' '}
            <Text as="span" color="teal.500">
              Questions.
            </Text>{' '}
            Contacts.
          </Heading>
          <Text mt="4" fontSize="lg" opacity={0.5}>
            A utility-first CSS framework packed with classes like flex and
            rotate-90 that can be composed to build any design, directly in your
            markup.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}
