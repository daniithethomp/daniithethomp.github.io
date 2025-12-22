import './App.css';
import { Box } from '@chakra-ui/react';
import AllProjects from './all-projects.js';
import AboutMe from './about-me.js';
import Heading from './heading.js';

function App() {
  return (
    <Box bg="#0b0c10" color="white" minH="100vh" px={{ base: 4, md: 10 }} py={8}>
      <Heading />
      <AboutMe />
      {/* Projects */}
      <AllProjects />
    </Box>
  );
}

export default App;