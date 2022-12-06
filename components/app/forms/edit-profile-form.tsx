import { gql, useMutation, useApolloClient, useQuery } from '@apollo/client'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { useToken } from 'hooks'
import { USER_QUERY } from 'queries'
import {
  Mutation_RootUpdate_Users_By_PkArgs,
  Query_Root,
  Query_RootUsers_By_PkArgs,
} from 'types'

type FormData = {
  name: string
}

const USER_MUTATION = gql`
  mutation ($id: uuid!, $set: users_update_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
    }
  }
`

export const EditProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>()

  const client = useApolloClient()

  const { id } = useToken()
  const query = useQuery<Query_Root, Query_RootUsers_By_PkArgs>(USER_QUERY, {
    variables: { id },
  })
  const user = query?.data?.users_by_pk
  setValue('name', user?.name || '')

  const [save] = useMutation<Mutation_RootUpdate_Users_By_PkArgs>(USER_MUTATION)

  const onSave = (input: FormData) =>
    save({ variables: { input } }).finally(() =>
      client.refetchQueries({ include: [USER_QUERY] })
    )

  return (
    <Box as="form" onSubmit={handleSubmit(onSave)} gap="8">
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          variant="flushed"
          placeholder="Full Name"
          {...register('name')}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input variant="flushed" isDisabled value={user?.email || ''} />
      </FormControl>

      <Button mt={6} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  )
}
