import {
  Heading,
  Stack,
  StackDivider,
  Text,
  Button,
  Box,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/react'

import { EditProfileForm, Layout, LayoutContainer } from 'components/app'

export const Me = () => {
  return (
    <Layout>
      <LayoutContainer py="12">
        <Heading>Profile settings</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <Stack
          direction={['column', 'column', 'row', 'row']}
          divider={<StackDivider />}
          spacing="8"
          alignItems="center"
        >
          <Box flex={1} w="full">
            <EditProfileForm />
          </Box>
          <Box flex={1} w="full">
            <Button
              w="full"
              variant="outline"
              colorScheme="red"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </Box>
        </Stack>
      </LayoutContainer>
    </Layout>
  )
}
