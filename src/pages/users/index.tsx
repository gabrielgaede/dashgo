import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "@/components/Pagination";
import Link from "next/link";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
       base: false,
       lg: true, 
    })

    return (
        <Box>
            <Header />
            <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX={["4","4","6"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} background="gray.800" padding="8">
                    <Flex marginBottom="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                               <Th paddingX={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th> 
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td paddingX={["4","4","6"]}> 
                                    <Checkbox colorScheme="pink" />
                                </Td>   
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Gaede</Text>
                                        <Text fontSize="sm" color="gray.300">gaede.es@gmail.com</Text>
                                    </Box> 
                                </Td>                                   
                                {isWideVersion && <Td>09 de Fevereiro, 2023</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td paddingX={["4","4","6"]}> 
                                    <Checkbox colorScheme="pink" />
                                </Td>   
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Gaede</Text>
                                        <Text fontSize="sm" color="gray.300">gaede.es@gmail.com</Text>
                                    </Box> 
                                </Td>                                   
                                {isWideVersion && <Td>09 de Fevereiro, 2023</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td paddingX={["4","4","6"]}> 
                                    <Checkbox colorScheme="pink" />
                                </Td>   
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Gaede</Text>
                                        <Text fontSize="sm" color="gray.300">gaede.es@gmail.com</Text>
                                    </Box> 
                                </Td>                                   
                                {isWideVersion && <Td>09 de Fevereiro, 2023</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>                                                        
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}