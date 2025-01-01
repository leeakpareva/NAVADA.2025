import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black"
      >
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <Services />
        <Work />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;