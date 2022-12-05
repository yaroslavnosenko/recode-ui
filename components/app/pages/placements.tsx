import { Heading, Text } from '@chakra-ui/react'

import { Layout, LayoutContainer, PlacementList } from 'components/app'

export const Placements = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading>Placements</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <PlacementList />
      </LayoutContainer>
    </Layout>
  )
}
