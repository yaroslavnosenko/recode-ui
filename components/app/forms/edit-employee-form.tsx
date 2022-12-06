import { gql, useApolloClient, useMutation } from '@apollo/client'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'

import { EMPLOYEES_QUERY } from 'queries'
import {
  Employee,
  Employee_Set_Input,
  Mutation_RootInsert_Employee_OneArgs,
  Mutation_RootUpdate_Employee_By_PkArgs,
} from 'types'

type FormData = Employee_Set_Input

const EMPLOYEE_INSERT_MUTATION = gql`
  mutation ($input: employee_insert_input!) {
    insert_employee_one(object: $input) {
      id
    }
  }
`

const EMPLOYEE_UPDATE_MUTATION = gql`
  mutation (
    $_set: employee_set_input!
    $pk_columns: employee_pk_columns_input!
  ) {
    update_employee_by_pk(_set: $_set, pk_columns: $pk_columns) {
      id
    }
  }
`

interface Props {
  employee: Employee | undefined
  merchantId: string
}

export const EditEmployeeForm = ({ employee, merchantId }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>()
  const client = useApolloClient()

  setValue('merchantId', merchantId)
  useEffect(() => {
    setValue('name', employee?.name)
    setValue('username', employee?.username)
    setValue('pin', employee?.pin)
  }, [setValue, employee])

  const [insert] = useMutation<Mutation_RootInsert_Employee_OneArgs>(
    EMPLOYEE_INSERT_MUTATION
  )

  const [update] = useMutation<Mutation_RootUpdate_Employee_By_PkArgs>(
    EMPLOYEE_UPDATE_MUTATION
  )

  const onSave = (input: FormData) => {
    const id = employee?.id
    const save = id
      ? () => update({ variables: { _set: input, pk_columns: { id } } })
      : () => insert({ variables: { input } })
    save().finally(() => client.refetchQueries({ include: [EMPLOYEES_QUERY] }))
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSave)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
        <Box>
          <FormControl isRequired>
            <FormLabel mb="0">Full Name</FormLabel>
            <Input
              variant="flushed"
              placeholder="Full Name"
              {...register('name')}
            />
          </FormControl>

          <FormControl mt="6" isRequired>
            <FormLabel mb="0">Username</FormLabel>
            <Input
              variant="flushed"
              placeholder="username"
              {...register('username')}
            />
          </FormControl>

          <FormControl mt="6" isRequired>
            <FormLabel mb="0">6 Digits PIN</FormLabel>
            <Input
              variant="flushed"
              placeholder="your_bussiness"
              type="password"
              {...register('pin')}
            />
          </FormControl>
        </Box>
      </SimpleGrid>

      <Button
        mt={6}
        colorScheme="teal"
        type="submit"
        leftIcon={<FiSave strokeWidth={2} />}
      >
        Save
      </Button>
    </Box>
  )
}
