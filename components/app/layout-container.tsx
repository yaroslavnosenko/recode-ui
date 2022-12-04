import { ChakraComponent, Container, ContainerProps } from '@chakra-ui/react'

export const LayoutContainer: ChakraComponent<'div'> = (
  props: ContainerProps
) => {
  return <Container px={{ base: 6, lg: 12 }} maxWidth="full" {...props} />
}
