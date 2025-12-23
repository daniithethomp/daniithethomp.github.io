import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export default function AboutMe() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to element
    const y = e.clientY - rect.top;  // Mouse Y relative to element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-10 to 10 degrees based on position)
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const glareX = -rotation.y * 2; // Horizontal movement based on Y rotation
  const glareY = rotation.x * 2;  // Vertical movement based on X rotation

  return (
    <Box position="relative" width="100%" minH="400px" overflow="hidden">
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={0}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <Image
          src="/background-image.jpeg"
          alt="Background Image"
          width="100%"
          height="100%"
          objectFit="cover"
          filter="blur(2px)"
        />
      </Box>

      {/* Content */}
      <Box position="relative" zIndex={1} px={{ base: 4, md: 10 }} py={12}>
        <VStack align="center" spacing={4} mb={8}>
          <Box 
            position="relative" 
            overflow="visible"
            role="group"
            cursor="pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: '1000px',
            }}
            boxSize="150px"
          >
            <Box
              position="relative"
              width="100%"
              height="100%"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovering ? 'scale(1.15)' : 'scale(1)'}`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                width="100%"
                height="100%"
              >
                <Image
                  src="/profile-picture.jpeg"
                  alt="Danii Thompson"
                  borderRadius="full"
                  boxSize="150px"
                  border="4px solid"
                  borderColor="whiteAlpha.300"
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  width="120%"
                  height="120%"
                  borderRadius="full"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.85) 0%, transparent 60%)',
                    transform: `translate(-50%, -50%) translate(${glareX}%, ${glareY}%)`,
                    opacity: isHovering ? 1 : 0,
                    transition: 'opacity 0.3s ease, transform 0.1s ease-out',
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay',
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Heading size="lg" letterSpacing="wide" color="white">
            About Me
          </Heading>
        </VStack>

        <VStack spacing={6} maxW="800px" mx="auto">
          <Text fontSize="lg" textAlign="center" color="white">
            Hello! I'm Danii, an aspiring software developer with a love for all things coding. I specialise in software engineering, cybersecurity and web development. I enjoy creating efficient and innovative solutions to complex problems.
          </Text>

          <Heading size="md" color="white">
            Education
          </Heading>

          <Text fontSize="lg" textAlign="center" color="white">
            I am currently in my final year of pursuing a Bachelor's degree in Computer Science at the University of Sheffield.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}