import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];

  const referenceNum = searchQuery.get("reference");
  return (
    <Box bg="gray.100" minH="100vh" py={8}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="xl" color="teal.500" textTransform="uppercase">
          Order Successful
        </Heading>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="lg">
          <Text fontSize="xl">
            Thank you for your purchase! Your order has been successfully
            processed.
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Reference No. {referenceNum}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
