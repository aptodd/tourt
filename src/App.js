import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Hero from './Components/Hero.tsx'
import Intro from './Components/Intro.tsx'
import AboutUs from './Components/AboutUs.tsx'

/**
 * Fonts
 * Myriad Variable Concept - Light SemiExtended
 * #E2774A
 * Boundless
 * #E2774A
 * Myriad Variable Concept - Light SemiExtended
 * #E97C3B
 * #F98F3C
 * #FEAD47
 * #FBC488
 * Myriad Variable Concept - Light SemiExtended - Italic
 * #FBC488
 * Myriad Variable Concept - Light SemiExtended
 * #806A61
 */

const styles = {
  rootContainer: {
      padding: {xs: 0},
      align: "center",
    }
 };

function App() {
  return (
    <Container sx={styles.rootContainer}>
      <Hero/>
      <Intro/>
      <AboutUs/>
    </Container>
  );
}

export default App;
