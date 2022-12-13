import {
  AspectRatio,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  useColorModeValue,
  Wrap,
  WrapItem,
  Text,
} from '@chakra-ui/react'
import { FiMapPin, FiPhone, FiWifi } from 'react-icons/fi'

export const MerchantInfo = () => {
  const bgColor = useColorModeValue('gray.100', 'dark.800')
  return (
    <Box pt="8" pb="4">
      <Container maxW="container.sm">
        <AspectRatio ratio={3 / 1}>
          <Box
            borderRadius="lg"
            backgroundPosition="center"
            backgroundSize="cover"
            bgColor={bgColor}
            backgroundImage="https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </AspectRatio>
        <Heading fontWeight="500" size="lg" mt="4">
          Hand of Midas - Cafe & Bar
        </Heading>
        <Wrap mt="4" spacing={2} opacity={0.5}>
          <WrapItem>
            <HStack>
              <Icon as={FiMapPin} />
              <Text>777 Brick Ln, London E1 6SB, United Kingdom</Text>
            </HStack>
          </WrapItem>

          <WrapItem>
            <HStack>
              <Icon as={FiPhone} />
              <Text>+44 20 7729 7892</Text>
            </HStack>
          </WrapItem>

          <WrapItem>
            <HStack>
              <Icon as={FiWifi} />
              <Text>HandMidas777</Text>
            </HStack>
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  )
}
