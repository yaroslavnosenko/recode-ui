import { Box, Heading, Text } from '@chakra-ui/react'

interface Props {
  title: JSX.Element | string
  body: JSX.Element | string
  icon: JSX.Element
}

export const Feature = ({ title, body, icon }: Props) => {
  return (
    <Box mt="12" _first={{ mt: 0 }}>
      <Box display="inline-block">{icon}</Box>
      <Heading as="h2" size="lg" mt="4" fontWeight="600">
        {title}
      </Heading>
      <Text mt="4" opacity={0.5}>
        {body}
      </Text>
    </Box>
  )
}
