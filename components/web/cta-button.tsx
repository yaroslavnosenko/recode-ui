import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { ROUTES } from 'configs'

export const CtaButton = () => {
  return (
    <NextLink href={ROUTES.AUTH}>
      <Button
        w="full"
        colorScheme="teal"
        size="lg"
        rounded="full"
        bgGradient="linear(to-r, teal.500, teal.500, yellow.500)"
        _hover={{ bgGradient: 'linear(to-r, teal.500, teal.600, yellow.600)' }}
        _active={{ bgGradient: 'linear(to-r, teal.600, teal.700, yellow.700)' }}
        rightIcon={<FiArrowRight className="ml-3" strokeWidth={3} />}
        fontWeight="500"
      >
        Get Started
      </Button>
    </NextLink>
  )
}
