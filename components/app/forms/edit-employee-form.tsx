import { gql, useMutation, useApolloClient, useQuery } from '@apollo/client'
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

import { EMPLOYEES_QUERY, USER_QUERY } from 'queries'
import {
  Employee_Set_Input,
  Mutation_RootInsert_Merchant_OneArgs,
  Query_Root,
} from 'types'

type FormData = Employee_Set_Input

const MERCHANT_MUTATION = gql`
  mutation ($input: merchants_insert_input!) {
    insert_merchant_one(
      object: $input
      on_conflict: {
        constraint: merchants_userId_key
        update_columns: [name, slug, lang, currency, phone, address, wifi]
      }
    ) {
      id
    }
  }
`

interface Props {
  id?: string
}

export const EditEmployeeForm = ({ id }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>()

  const client = useApolloClient()

  const { data, loading } = useQuery<Query_Root>(EMPLOYEES_QUERY, {
    variables: { id },
  })
  setValue('id', id)
  useEffect(() => {
    setValue('name', '')
    setValue('username', '')
    setValue('pin', '')
  }, [data, setValue])

  const [save] =
    useMutation<Mutation_RootInsert_Merchant_OneArgs>(MERCHANT_MUTATION)

  const onSave = (input: FormData) =>
    save({ variables: { input } }).finally(() =>
      client.refetchQueries({ include: [USER_QUERY] })
    )

  return (
    <Box as="form" onSubmit={handleSubmit(onSave)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
        <Box>
          <FormControl isRequired isDisabled={loading}>
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
