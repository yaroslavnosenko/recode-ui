import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { EditEmployeeForm, Layout, LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'

export const Employee = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading></Heading>
        <Heading>
          <Text as="span" fontWeight="normal">
            <Link to={APP_ROUTES.EMPLOYEES}>Employees</Link>
            {' / '}
          </Text>
          New
        </Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <EditEmployeeForm />
      </LayoutContainer>
    </Layout>
  )
}
