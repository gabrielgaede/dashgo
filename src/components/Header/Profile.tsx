import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box marginRight="4" textAlign="right">
                    <Text>Gabriel Gaede</Text>
                    <Text color="gray.300" fontSize="small">
                        gaede.es@gmail.com
                    </Text>
                </Box>
            )}


            <Avatar size="md" name='Gabriel Gaede' src="https://github.com/gabrielgaede.png"/>
        </Flex>       
    );
}