import {
  AspectRatio,
  Box,
  BoxProps,
  Image,
  Heading,
  Text,
  HStack,
  Icon,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { FiMapPin, FiPhone, FiWifi } from 'react-icons/fi'

export const SupplierInfo = ({ ...props }: BoxProps) => {
  return (
    <Box {...props}>
      <AspectRatio ratio={2 / 1}>
        <Image
          objectPosition="center"
          objectFit="cover"
          alt="photo"
          src="http://www.encoretheclub.sk/img/lo1.jpg"
          rounded="xl"
          boxShadow="md"
        />
      </AspectRatio>

      <Heading my="4" size="lg" fontWeight="900">
        Encore Bar
      </Heading>

      <Wrap spacing="3">
        <WrapItem>
          <HStack spacing="1.5" opacity=".6">
            <Icon as={FiMapPin} />
            <Text>Hlavná 111, 040 01 Staré Mesto, Slovakia</Text>
          </HStack>
        </WrapItem>
        <WrapItem>
          <HStack spacing="1.5" opacity=".6">
            <Icon as={FiPhone} />
            <Text>+421 908 400 200</Text>
          </HStack>
        </WrapItem>
        <WrapItem>
          <HStack spacing="1.5" opacity=".6">
            <Icon as={FiWifi} />
            <Text>encore_wifi</Text>
          </HStack>
        </WrapItem>
      </Wrap>
    </Box>
  )
}
