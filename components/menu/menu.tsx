import {
  AspectRatio,
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  Image,
} from '@chakra-ui/react'

export const Menu = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Container>
        <Heading size="lg" mb="6">
          Cocktails
        </Heading>
        <Stack divider={<StackDivider />} spacing="6">
          <HStack spacing="2">
            <Box flex={1}>
              <Heading size="md">Raspberry mousse</Heading>
              <Text mt="1" opacity=".6">
                Raspberry mousse with cream and raspberry syrup
              </Text>
              <Text mt="1">$7,50</Text>
            </Box>
            <Box>
              <AspectRatio ratio={1} boxSize="20">
                <Image
                  alt="aperol"
                  rounded="xl"
                  src="http://www.encoretheclub.sk/img/lo4.jpg"
                  boxShadow="md"
                />
              </AspectRatio>
            </Box>
          </HStack>

          <HStack spacing="2">
            <Box flex={1}>
              <Heading size="md">Cheesecake</Heading>
              <Text mt="1" opacity=".6">
                Natural ice cream made from berries
              </Text>
              <Text mt="1">$15,50</Text>
            </Box>
            <Box>
              <AspectRatio ratio={1} boxSize="20">
                <Image
                  alt="aperol"
                  rounded="xl"
                  src="http://www.encoretheclub.sk/img/lo5.jpg"
                  boxShadow="md"
                />
              </AspectRatio>
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  )
}
