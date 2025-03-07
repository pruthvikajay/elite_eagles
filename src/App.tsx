import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import Home from './components/Home';
import CompetitionsList from './components/Competitions';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import RegistrationSuccess from './components/RegistrationSuccess';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Using a more authentic eagle screaming sound
  const [playEagleSound] = useSound('https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC503496-Eagle%20call%20landing%20on%20tree.mp3', { volume: 0.4 });

  useEffect(() => {
    // Try to play eagle sound
    playEagleSound();
    
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000);
    
    return () => clearTimeout(timer);
  }, [playEagleSound]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.7, 1],
            ease: "easeInOut"
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <motion.h1 
              className="exploria-title text-6xl mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 40px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.5)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              AIKYAM
            </motion.h1>
            <motion.p 
              className="text-yellow-800 subtitle text-xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              by Team Elite Eagles
            </motion.p>
            <p className="text-yellow-700 subtitle text-lg mt-2">Where Innovation Takes Flight</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="eagle-background" />
      <div className="eagle-eyes">
        <div className="eagle-eye eagle-eye-left" />
        <div className="eagle-eye eagle-eye-right" />
      </div>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<CompetitionsList />} />
          <Route path="/register/:competition" element={<RegistrationForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success" element={<RegistrationSuccess />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;