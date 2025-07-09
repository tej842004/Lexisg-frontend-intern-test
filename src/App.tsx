import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ChatBubble from "./components/ChatBubble";
import DarkModeToggle from "./components/DarkModeToggle";
import InputPanel from "./components/InputPanel";
import type { ApiResponse } from "./types/index";

function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  const handleSubmit = (input: string) => {
    setQuery(input);
    setLoading(true);

    setTimeout(() => {
      const mockResponse: ApiResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };

      setResponse(mockResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Container maxW="3xl" flex="1" py={4}>
        <VStack spacing={4} align="stretch" height="100%">
          <Box display="flex" justifyContent="space-between">
            <Heading size="md" textAlign="center">
              Lexi Legal Chat Assistant
            </Heading>
            <DarkModeToggle />
          </Box>

          <VStack spacing={4} align="stretch" p={4} flex="1" overflowY="auto">
            {query ? (
              <>
                <ChatBubble type="user" text={query} />
                {response && (
                  <ChatBubble
                    type="bot"
                    text={response.answer}
                    citation={response.citations[0]}
                  />
                )}
              </>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                opacity={0.6}
                fontSize="lg"
                height="50vh"
              >
                What can I help you with today?
              </Box>
            )}
          </VStack>
        </VStack>
      </Container>

      <Box py={7} px={4}>
        <Container maxW="3xl">
          <InputPanel onSubmit={handleSubmit} loading={loading} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
