import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { EmployeeList, Layout, LayoutContainer } from 'components/app'

export const Employees = () => {
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
          <Button
            leftIcon={<FiPlus strokeWidth={3} />}
            size="sm"
            variant="ghost"
          >
            Add New
          </Button>
        </HStack>
        <EmployeeList />
      </LayoutContainer>
    </Layout>
  )
}
