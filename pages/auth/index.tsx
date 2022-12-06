import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { getToken } from 'next-auth/jwt'
import { signIn } from 'next-auth/react'
import { NextRequest } from 'next/server'
import { FiUserPlus, FiArrowRight } from 'react-icons/fi'
import { SiApple, SiGoogle } from 'react-icons/si'

import { Layout } from 'components/web'
import { ROUTES } from 'configs'

const LINKS = [
  { text: 'Create new Account', icon: <FiUserPlus strokeWidth={3} /> },
  { text: 'Sign in with Google', icon: <SiGoogle /> },
  { text: 'Sign in with Apple Account', icon: <SiApple /> },
]

const LoginButton = ({ link }: any) => {
  const color = useColorModeValue('dark.900', 'gray.50')
  const bg = useColorModeValue('white', 'dark.900')
  return (
    <Box
      key={link.text}
      p="2px"
      rounded="lg"
      h="14"
      bgGradient="linear(to-r, teal.500, teal.500, yellow.500)"
      _hover={{
        bgGradient: 'linear(to-r, teal.500, teal.600, yellow.600)',
      }}
      _active={{
        bgGradient: 'linear(to-r, teal.600, teal.700, yellow.700)',
      }}
      _even={{
        bgGradient: 'linear(to-l, teal.500, teal.600, yellow.600)',
        _active: { bgGradient: 'linear(to-l, teal.600, teal.700, yellow.700)' },
      }}
    >
      <Button
        w="full"
        key={link.text}
        h="full"
        colorScheme="teal"
        size="lg"
        leftIcon={link.icon}
        px="6"
        onClick={() => signIn('github')}
        display="flex"
        justifyContent="flex-start"
        fontWeight="normal"
        color={color}
        bg={bg}
        _hover={{ bg: 'transparent', color: 'white' }}
        _active={{ bg: 'transparent', color: 'white' }}
      >
        <Text ml="2">{link.text}</Text>
      </Button>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing="0"
      justifyContent="center"
      alignItems="center"
      className="flex flex-col md:flex-row md:justify-center md:items-center"
    >
      <Stack flex={1} maxW="md" spacing={4}>
        <Input
          px="6"
          size="lg"
          variant="filled"
          type="text"
          placeholder="Username"
          h="14"
        />
        <Input
          px="6"
          size="lg"
          variant="filled"
          type="password"
          placeholder="8 Digit Pin"
          maxLength={8}
          minLength={8}
          h="14"
        />
        <Button
          h="14"
          colorScheme="teal"
          size="lg"
          rightIcon={<FiArrowRight strokeWidth={3} />}
          display="flex"
          px="6"
          justifyContent="space-between"
          fontWeight="500"
          bgGradient="linear(to-r, teal.500, teal.500, yellow.500)"
          _hover={{
            bgGradient: 'linear(to-r, teal.500, teal.600, yellow.600)',
          }}
          _active={{
            bgGradient: 'linear(to-r, teal.600, teal.700, yellow.700)',
          }}
        >
          Login to Your Account
        </Button>
      </Stack>

      <Box p="20" fontSize="4xl">
        /
      </Box>
      <hr className="block md:hidden my-8 border-dark-700" />

      <Stack flex={1} maxW="md" spacing={4}>
        {LINKS.map((link) => (
          <LoginButton key={link.text} link={link} />
        ))}
      </Stack>
    </Stack>
  )
}

export default function Auth() {
  return (
    <Layout>
      <Container maxW="container.xl" py="16">
        <Box textAlign="center" maxW="container.sm" mx="auto">
          <Heading as="h1" fontWeight="600" size="2xl">
            Login to Your Account
          </Heading>
          <Text mt="4" fontSize="lg" opacity={0.5}>
            A utility-first CSS framework packed with classes like flex and
            rotate-90 that can be composed to build any design, directly in your
            markup.
          </Text>
        </Box>
        <Box py="10">
          <LoginForm />
        </Box>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const req = context.req as NextRequest
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({ req, secret, raw: true })
  return !token
    ? { props: {} }
    : {
        redirect: {
          permanent: false,
          destination: ROUTES.APP,
        },
      }
}
