import { Box, Text, Link, useColorModeValue, VStack } from "@chakra-ui/react";
import type { Citation } from "../types/index";

interface Props {
  type: "user" | "bot";
  text: string;
  citation?: Citation;
}

const ChatBubble: React.FC<Props> = ({ type, text, citation }) => {
  const isUser = type === "user";

  return (
    <Box
      alignSelf={isUser ? "flex-end" : "flex-start"}
      bg={isUser ? "blue.500" : useColorModeValue("gray.100", "gray.700")}
      color={isUser ? "white" : "black"}
      px={4}
      py={3}
      borderRadius="xl"
      maxW="80%"
      boxShadow="md"
    >
      <VStack spacing={2} align="start">
        <Text>{text}</Text>

        {citation && (
          <Box fontSize="sm" color={isUser ? "blue.100" : "gray.600"}>
            <Text as="i">“{citation.text}”</Text> —{" "}
            <Link href={citation.link} isExternal color="blue.400">
              {citation.source}
            </Link>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ChatBubble;
