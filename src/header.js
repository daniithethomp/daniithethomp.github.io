import { Flex, HStack, Link, Image, Text, Heading, VStack } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
        as="header"
        justify="space-between"
        align="center"
        gap={6}
        flexWrap="wrap"
        direction={{ base: 'column', md: 'row' }}
        height="fit-content"
      >
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <HStack spacing={4}>
            <Image boxSize="50px" src="logo-500.png" alt="Danii Thompson Logo" />
            <Heading size="lg" letterSpacing="tight">Danii Thompson</Heading>
          </HStack>
        </Link>

        <VStack 
          spacing={{ base: 3, md: 0 }} 
          align={{ base: 'center', md: 'flex-end' }}
        >
          <HStack 
            spacing={{ base: 4, md: 6 }} 
            fontWeight="medium"
            flexWrap="wrap"
            justify="center"
          >
            <Link 
              href="https://github.com/daniithethomp" 
              isExternal 
              display="inline-flex" 
              alignItems="center" 
              gap={2}
            >
              <Image boxSize="20px" src="/github-mark-white.png" alt="GitHub Logo" />
              <Text display={{ base: 'none', sm: 'inline' }}>daniithethomp</Text>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/daniithompson/" 
              isExternal 
              display="inline-flex" 
              alignItems="center" 
              gap={2}
            >
              <Image boxSize="20px" src="/linkedin-logo.png" alt="LinkedIn Logo" />
              <Text display={{ base: 'none', sm: 'inline' }}>Danii Thompson</Text>
            </Link>
            <HStack gap={2}>
              <Image boxSize="20px" src="/discord-mark-white.png" alt="Discord Logo" objectFit="contain" />
              <Text display={{ base: 'none', sm: 'inline' }}>fourshadows4</Text>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
  )
}