import { Heading, Text } from '@chakra-ui/react'

import { EmployeeList, Layout, LayoutContainer } from 'components/app'

export const Employees = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading>Employees</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <EmployeeList />
      </LayoutContainer>
    </Layout>
  )
}
