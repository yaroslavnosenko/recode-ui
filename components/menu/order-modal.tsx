import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useColorModeValue,
  Container,
  HStack,
  Heading,
  ModalHeader,
  Icon,
  Box,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FiArrowLeft, FiBell } from 'react-icons/fi'

import { MenuContext, ProductList } from 'components/menu'

interface Props {
  onClose: () => void
}

export const OrderModal = (props: Props) => {
  const bg = useColorModeValue('white', 'dark.900')
  const { order } = useContext(MenuContext)
  return (
    <Modal
      size="full"
      motionPreset="slideInBottom"
      isOpen={true}
      onClose={props.onClose}
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent h="full" bg="transparent">
        <ModalHeader bg={bg} p="0" borderBottomWidth="1px">
          <Container maxW="container.sm" py="6">
            <Heading size="md">Confirm your order</Heading>
          </Container>
        </ModalHeader>
        <ModalBody bg={bg} p="0">
          <Container maxW="container.sm" py="8">
            <ProductList
              products={order.map((row) => row.product)}
              hideLine={true}
            />
          </Container>
        </ModalBody>
        <ModalFooter bg={bg} p="0" borderTopWidth="1px">
          <Container maxW="container.sm">
            <HStack py="6" spacing="4">
              <Button
                fontWeight="500"
                size="lg"
                variant="ghost"
                onClick={props.onClose}
                leftIcon={<Icon strokeWidth={2.5} as={FiArrowLeft} />}
              >
                Back
              </Button>
              <Button
                fontWeight="500"
                size="lg"
                flex={1}
                colorScheme="teal"
                leftIcon={<Icon strokeWidth={2.5} as={FiBell} />}
              >
                Confirm
              </Button>
            </HStack>
            <Box pb="env(safe-area-inset-bottom)" />
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
