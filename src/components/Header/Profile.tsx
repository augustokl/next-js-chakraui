import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Augusto</Text>
      <Text color="gray.300" fontSize="small">
        test@gmail.com
      </Text>
    </Box>
    <Avatar size="md" name="Augusto"/>
  </Flex>
  )
}