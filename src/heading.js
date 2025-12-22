import { Box, Flex, HStack, Link, Image, Text, Heading } from '@chakra-ui/react';

export default function HeadingComponent() {
  return (
    <Flex
        as="header"
        justify="space-between"
        align="center"
        mb={10}
        gap={6}
        flexWrap="wrap"
      >
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <HStack spacing={4}>
            <Flex id="logo" position="relative" boxSize="50px">
              <Box id="pink" position="absolute" top="0" left="0" w="50%" h="50%" bg="#ff6fb1" borderRadius="8px" />
              <Box id="orange" position="absolute" top="25%" left="10%" w="50%" h="50%" bg="#ff9f45" borderRadius="8px" />
              <Box id="blue" position="absolute" top="50%" left="20%" w="50%" h="50%" bg="#6bd5ff" borderRadius="8px" />
            </Flex>
            <Heading size="lg" letterSpacing="tight">Danii Thompson</Heading>
          </HStack>
        </Link>

        <HStack spacing={6} fontWeight="medium">
          <Link href="https://github.com/daniithethomp" isExternal display="inline-flex" alignItems="center" gap={2}>
            <Image boxSize="20px" src="/github-mark-white.png" alt="GitHub Logo" />
            daniithethomp
          </Link>
          <Link href="https://www.linkedin.com/in/daniithompson/" isExternal display="inline-flex" alignItems="center" gap={2}>
            <Image boxSize="20px" src="/linkedin-logo.png" alt="LinkedIn Logo" />
            Danii Thompson
          </Link>
          <HStack gap={2}>
            <Image boxSize="20px" src="/discord-mark-white.png" alt="Discord Logo" objectFit="contain" />
            <Text>fourshadows4</Text>
          </HStack>
        </HStack>
      </Flex>
  )
}