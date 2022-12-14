import { Heading, Text } from '@chakra-ui/react'

import { CategoryList, Layout, LayoutContainer } from 'components/app'

export const Categories = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading>Categories</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <CategoryList />
      </LayoutContainer>
    </Layout>
  )
}
