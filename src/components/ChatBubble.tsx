import { Box, Link, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import type { Citation } from "../types/index";

interface Props {
  type: "user" | "bot";
  text: string;
  citation?: Citation;
}

const ChatBubble: React.FC<Props> = ({ type, text, citation }) => {
  const isUser = type === "user";

  const botBg = useColorModeValue("gray.100", "gray.700");
  const botText = useColorModeValue("black", "whiteAlpha.900");
  const citationColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      alignSelf={isUser ? "flex-end" : "flex-start"}
      bg={isUser ? "blue.500" : botBg}
      color={isUser ? "white" : botText}
      px={4}
      py={3}
      borderRadius="xl"
      maxW="80%"
      boxShadow="md"
    >
      <VStack spacing={2} align="start">
        <Text>{text}</Text>

        {citation && (
          <Box fontSize="sm" color={isUser ? "blue.100" : citationColor}>
            <Text as="i">“{citation.text}”</Text> —{" "}
            <Link
              href={citation.link}
              isExternal
              color={isUser ? "blue.200" : "blue.300"}
            >
              {citation.source}
            </Link>
            <Text fontSize="xs" color={citationColor}>
              (Opens to Paragraph 7)
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ChatBubble;
