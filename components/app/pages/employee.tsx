import { useQuery } from '@apollo/client'
import { Heading, Text } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

import { EditEmployeeForm, Layout, LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'
import { useToken } from 'hooks'
import { EMPLOYEES_QUERY } from 'queries'
import { Employee as EmployeeType, Query_Root } from 'types'

export const Employee = () => {
  const token = useToken()
  const { data } = useQuery<Query_Root>(EMPLOYEES_QUERY, {
    variables: { id: token.id },
  })
  const employees: EmployeeType[] = data?.users_by_pk?.merchant?.employees || []
  const merchantId: string = data?.users_by_pk?.merchant?.id || ''

  const { id } = useParams()
  const employee: EmployeeType | undefined = employees.find(
    (employee) => employee.id === id
  )

  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading></Heading>
        <Heading>
          <Text as="span" fontWeight="normal">
            <Link to={APP_ROUTES.EMPLOYEES}>Employees</Link>
            {' / '}
          </Text>
          {employee ? employee.name : 'New'}
        </Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <EditEmployeeForm merchantId={merchantId} employee={employee} />
      </LayoutContainer>
    </Layout>
  )
}
