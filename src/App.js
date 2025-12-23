import './App.css';
import { Box } from '@chakra-ui/react';
import AllProjects from './all-projects.js';
import AboutMe from './about-me.js';
import Header from './header.js';

function App() {
  return (
    <Box bg="black" color="white" minH="100vh">
      <Box px={{ base: 4, md: 10 }} py={8}>
        <Header />
      </Box>
      <AboutMe />
      <Box px={{ base: 4, md: 10 }} py={8}>
        <AllProjects />
      </Box>
    </Box>
  );
}

export default App;