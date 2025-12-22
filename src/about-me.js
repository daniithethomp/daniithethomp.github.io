import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

export default function AboutMe() {
  return (
    <Box bg="#0b0c10" color="white" px={{ base: 4, md: 10 }} py={8}>
      <VStack align="center" spacing={4}>
        <Image
          width="100px"
          src="/profile-picture.jpeg"
          alt="Danii Thompson"
          borderRadius="100%"
          boxSize="150px"
        />
        <Heading size="lg" mb={6} letterSpacing="wide">
          About Me
        </Heading>
      </VStack>
      <Text fontSize="lg" mb={4} textAlign='center'>
        Hello! I'm Danii, a software developer with a love for all things coding. 
      </Text>
      <Text fontSize="lg" mb={4} textAlign='center'>
        I am currently in my final year of pursuing a Bachelor's degree in Computer Science at the University of Sheffield.
      </Text>
      <Text fontSize="lg" textAlign='center'>
        {/* My other interests include gaming, exploring the great outdoors, and tinkering with new technologies. */}
      </Text>
    </Box>
  );
}