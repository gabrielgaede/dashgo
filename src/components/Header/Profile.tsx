import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box marginRight="4" textAlign="right">
                <Text>Gabriel Gaede</Text>
                <Text color="gray.300" fontSize="small">
                    gaede.es@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name='Gabriel Gaede' src="https://github.com/gabrielgaede.png"/>
        </Flex>       
    );
}