import { Input } from '@/components/Form/Input'
import { Flex, Button, Stack  } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name='email' type='email' label='Seu e-mail' />
          <Input name='password' type='password' label='Sua senha' />
        </Stack>
        
        <Button type='submit' marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>

    </Flex>
  )
}
