import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Simulate API response
    const botMessage = { text: `You have 5000, I suggest a trip to Paris. Would you like to customize or book tickets?`, sender: "bot" };
    setMessages([...messages, userMessage, botMessage]);

    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" p={4}>
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} mb={2}>
              <Text bg={message.sender === "user" ? "blue.100" : "gray.100"} p={2} borderRadius="md">
                {message.text}
              </Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
