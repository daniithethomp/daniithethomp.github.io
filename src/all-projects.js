import { useMemo, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Divider,
  Tag,
  Input,
  Select,
  Checkbox,
  CheckboxGroup,
  Wrap,
  WrapItem,
  Collapse,
  IconButton
} from '@chakra-ui/react';

import { ChevronRight } from "lucide-react";

const projects = [
  {
    imgSrc: '/ReCoLA-logo.png',
    title: 'ReCoLA – Bill Management for Landlords',
    type: 'Academic Project',
    desc: 'An android mobile application that helps landlords manage utility bills for tenants, including payment tracking, bill splitting, payment reminders, and property and tenant management',
    tags: ['Mobile Application', 'Android', 'Kotlin', 'Compose'],
  },
  {
    title: 'LSFR-Based Stream Cipher with Divide and Conquer Attack',
    type: 'Academic Project',
    desc: 'A cryptography project that implements a stream cipher based on Linear Feedback Shift Registers (LFSRs) and demonstrates a divide-and-conquer attack to recover the internal state of the cipher.',
    tags: ['Cryptography', 'Java'],
  },
  {
    title: 'Linear Cryptanalysis of Simplified DES',
    type: 'Academic Project',
    desc: "A cryptanalysis project that implements linear cryptanalysis on a DES cipher as shown in Hey's Tutorial, recovering the encryption key by analysing plaintext-ciphertext pairs and exploiting linear approximations.",
    tags: ['Cryptography', 'Java'],
  },
  {
    title: 'Buzz – An Interactive 3D Graphics Showcase',
    type: 'Academic Project',
    desc: 'A computer graphics project built using Java OpenGL bindings, featuring a textured scene, hiearchical animation, dynamic lighting, and user-controlled camera and animation modes.',
    tags: ['Computer Graphics', 'JOGL', 'Java'],
  },
  {
    imgSrc: '/GRPO/GRPO-logo.png',
    title: 'Graphical Research Project Organiser',
    type: 'Academic Project',
    desc: 'A web application designed to help researchers organise and visualise the results of their research projects, and allowing for management of literature, datasets, tasks.',
    tags: ['Web-Application', 'Rails', 'Ruby', 'PostgreSQL'],
  },
  {
    title: 'ROS2 Robot Navigation',
    type: 'Academic Project',
    desc: 'A robotics project that implements autonomous navigation for a TurtleBot3 Waffle Robot using ROS2, including SLAM, path planning, and obstacle avoidance in both a real and simulated environment.',
    tags: ['Robotics', 'ROS2', 'Python'],
  },
  {
    title: 'Sludgate Brass Band',
    type: 'Academic Project',
    desc: 'A web application for a brass band to manage their members, performances, and item loans, with features for scheduling performances, tracking attendance, and managing members and inventory.',
    tags: ['Web-Application', 'Springboot', 'Java', 'MySQL'],
  },
  {
    title: 'Haskell Poker Simulation',
    type: 'Academic Project',
    desc: 'A command-line based poker game that simulates a game of poker between players with different strategies, handling betting rounds, hand evaluations, and determining the winner.',
    tags: ['Command-Line Application', 'Haskell'],
  },
  {
    title: 'F1 Data Analytics',
    type: 'Hackathon Project',
    desc: 'A data analytics project that analyses historical Formula 1 data to uncover insights and trends, using data cleaning, transformation, and visualisation techniques to present findings.',
    tags: ['Data Analytics', 'Python', 'numpy', 'pandas', 'matplotlib', 'streamlit'],
  },
  {
    title: 'MNIST Digit Classifier',
    type: 'Academic Project',
    desc: 'A machine learning project that builds and trains a K-Nearest Neighbors (KNN) classifier to recognise handwritten digits from the MNIST dataset, including noisy and masked images.',
    tags: ['Machine Learning', 'Python', 'numpy', 'pandas', 'matplotlib'],
  },
  {
    imgSrc: '/GradeCalculator/GC.png',
    title: 'GradeCalculator',
    type: 'Personal Project',
    desc: 'A University grade calculator web application that helps students calculate their final grades based on their current scores and desired outcomes.',
    tags: ['Web-Application', 'Rails', 'Ruby', 'PostgreSQL'],
  },
  {
    imgSrc: '/yogawebsite/YogaLogo.jpg',
    title: "Sarah's Go With The Flow Yoga",
    type: 'Client Project',
    desc: "A responsive website for a yoga instructor to showcase her services, schedule, and contact information, designed to attract and inform potential clients and provide booking and payment options.",
    tags: ['Web-Application', 'Flask', 'Python', 'SQLite'],
  },
  {
    title: 'Spotify Dashboard',
    type: 'Academic Project',
    desc: 'A desktop application that analyses a song dataset, supports query-based exploration, and provides an interactive GUI with visualisations to explore song chatacteristics.',
    tags: ['Desktop Application', 'Swing', 'Java'],
  },
];

export default function AllProjects() {
  // Filters - moved inside component
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      const matchesType = type === 'all' || p.type === type;
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((t) => p.tags.includes(t));
      return matchesQuery && matchesType && matchesTags;
    });
  }, [query, type, selectedTags]);

  return (
    <Box bg="#0b0c10" color="white" px={{ base: 4, md: 10 }} py={8}>
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between" cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
          <Heading size="md" letterSpacing="wide">My Projects</Heading>
          <IconButton
            icon={<ChevronRight />}
            variant="ghost"
            colorScheme="whiteAlpha"
            size="sm"
            aria-label="Toggle Projects"
            transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
            transition="transform 0.2s"
          />
        </HStack>
        <Divider borderColor="whiteAlpha.300" />

        <Collapse in={isOpen} animateOpacity>
          <VStack align="stretch" spacing={4}>
            {/* Filters */}
            <VStack align="stretch" spacing={3}>
              <Flex gap={3} direction={{ base: 'column', md: 'row' }}>
                <Input
                  placeholder="Search title or description"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  bg="whiteAlpha.100"
                  _placeholder={{ color: 'whiteAlpha.600' }}
                />
                <Select
                  maxW={{ md: '260px' }}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  bg="whiteAlpha.100"
                >
                  <option value="all">All types</option>
                  <option value="Personal Project">Personal Project</option>
                  <option value="Client Project">Client Project</option>
                  <option value="Academic Project">Academic Project</option>
                  <option value="Hackathon Project">Hackathon Project</option>
                </Select>
              </Flex>

              <CheckboxGroup
                colorScheme="teal"
                value={selectedTags}
                onChange={(vals) => setSelectedTags(vals)}
              >
                <Wrap pb={2}>
                  {allTags.map((t) => (
                    <WrapItem key={t}>
                      <Checkbox value={t} size="sm">
                        {t}
                      </Checkbox>
                    </WrapItem>
                  ))}
                </Wrap>
              </CheckboxGroup>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {filtered.map((p) => {
                const isExternal = /^https?:\/\//.test(p.href || '');
                return (
                  <Card
                    key={p.title}
                    as={p.href ? Link : Box}
                    href={p.href}
                    isExternal={isExternal}
                    _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', textDecoration: 'none' }}
                    transition="all 0.2s ease"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <CardBody>
                      <VStack align="stretch" spacing={3}>
                        {p.imgSrc && (
                          <Flex justify="center">
                            <Image src={p.imgSrc} alt={p.title} borderRadius="md" objectFit="cover" boxSize='50%' />
                          </Flex>
                        )}
                        <Stack spacing={1}>
                          <Heading size="md" color="whiteAlpha.800">{p.title}</Heading>
                          <Tag w="fit-content" colorScheme="orange" variant="subtle">
                            {p.type}
                          </Tag>
                          <Text color="whiteAlpha.800" fontSize="sm">
                            {p.desc}
                          </Text>
                          <Wrap pt={1}>
                            {p.tags?.map((t) => (
                              <WrapItem key={t}>
                                <Tag size="sm" variant="outline" colorScheme="teal">
                                  {t}
                                </Tag>
                              </WrapItem>
                            ))}
                          </Wrap>
                        </Stack>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>

            {filtered.length === 0 && (
              <Text color="whiteAlpha.700" fontStyle="italic">No projects match your filters.</Text>
            )}
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  );
}