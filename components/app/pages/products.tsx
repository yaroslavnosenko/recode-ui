import { Heading, Text } from '@chakra-ui/react'

import { EmployeeTable, Layout, LayoutContainer } from 'components/app'

export const Products = () => {
  return (
    <Layout>
      <LayoutContainer py="8">
        <Heading>Products</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <EmployeeTable />
      </LayoutContainer>
    </Layout>
  )
}
