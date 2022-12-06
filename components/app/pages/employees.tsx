import { useQuery } from '@apollo/client'
import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { EmployeeList, Layout, LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'
import { useToken } from 'hooks'
import { EMPLOYEES_QUERY } from 'queries'
import { Employee, Query_Root } from 'types'

export const Employees = () => {
  const { id } = useToken()
  const { data } = useQuery<Query_Root>(EMPLOYEES_QUERY, {
    variables: { id },
  })

  const employees: Employee[] = data?.users_by_pk?.merchant?.employees || []
  console.log(employees)

  return (
    <Layout>
      <LayoutContainer py="6">
        <HStack
          spacing={0}
          align="flex-end"
          justify="space-between"
          mb="8"
          wrap="wrap"
          gap="4"
        >
          <Box>
            <Heading>Employees</Heading>
            <Text opacity="0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              repudiandae hic quas similique rem dolorem.
            </Text>
          </Box>
          <Link to={APP_ROUTES.EMPLOYEE.replace(':id', 'new')}>
            <Button
              leftIcon={<FiPlus strokeWidth={3} />}
              size="sm"
              variant="ghost"
            >
              Add New
            </Button>
          </Link>
        </HStack>
        <EmployeeList />
      </LayoutContainer>
    </Layout>
  )
}
