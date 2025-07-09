import { AddIcon, ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGlobe, FaMicrophone } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";

interface Props {
  onSubmit: (query: string) => void;
  loading: boolean;
}

const InputPanel = ({ onSubmit, loading }: Props) => {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query.trim()) {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <VStack
      spacing={3}
      align="stretch"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={4}
      rounded="xl"
      boxShadow="md"
      w="100%"
      maxW="4xl"
      mx="auto"
    >
      <Input
        placeholder="Ask Anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        isDisabled={loading}
        variant="unstyled"
        px={2}
        rounded="md"
      />

      <HStack justify="space-between">
        <HStack>
          <IconButton
            aria-label="Add"
            icon={<AddIcon />}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Globe"
            icon={<FaGlobe />}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Speaker"
            icon={<TbSpeakerphone />}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Refresh"
            icon={<RepeatIcon />}
            size="sm"
            variant="ghost"
          />
        </HStack>

        <HStack spacing={1}>
          <IconButton
            aria-label="Mic"
            icon={<FaMicrophone />}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Submit"
            icon={<ArrowForwardIcon />}
            onClick={handleClick}
            isLoading={loading}
            colorScheme="blue"
            size="sm"
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default InputPanel;
