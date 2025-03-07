import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../public/assets/BEST.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0
  });
  // const [audioLoaded, setAudioLoaded] = useState(false);

  // useEffect(() => {
  //   // Create audio element programmatically with a more authentic eagle sound
  //   const eagleSound = new Audio('https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC503496-Eagle%20call%20landing%20on%20tree.mp3');
    
  //   // Set up event listeners
  //   eagleSound.addEventListener('canplaythrough', () => {
  //     setAudioLoaded(true);
  //   });
    
  //   eagleSound.addEventListener('error', () => {
  //     console.log("Audio failed to load");
  //     // Fallback to another eagle sound if the first one fails
  //     const fallbackSound = new Audio('https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC503495-Eagle%20call%20in%20flight.mp3');
  //     fallbackSound.volume = 0.4;
  //     fallbackSound.play().catch(e => console.log("Fallback audio play failed:", e));
  //   });
    
  //   // Clean up
  //   return () => {
  //     eagleSound.pause();
  //     eagleSound.src = "";
  //   };
  // }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-red-950 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="absolute top-4 sm:top-8 left-4 sm:left-8 text-yellow-500 font-bold text-xl sm:text-2xl"
      >
        <motion.span 
          className="inline-block"
          animate={{ 
            textShadow: ["0 0 5px rgba(251, 191, 36, 0.5)", "0 0 20px rgba(251, 191, 36, 0.8)", "0 0 5px rgba(251, 191, 36, 0.5)"],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          ANKURAM presents
        </motion.span>
      </motion.div>

      <div className="container mx-auto pt-16 sm:pt-20 px-4 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="logo-container mx-auto w-30 h-30"
        >
          <div className="logo-glow"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotateY: [0, 180, 360],
              boxShadow: [
                "0 0 10px rgba(251, 191, 36, 0.5)",
                "0 0 30px rgba(251, 191, 36, 0.8)",
                "0 0 10px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="bg-gradient-to-r from-yellow-500 to-red-700 p-6 rounded-full w-full h-full flex items-center justify-center"
          >
            <img 
              src={logo} 
              alt="Logo Holder" 
              className="w-full h-full object-cover rounded-full" // Updated className
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-12"
        >
          <h1 className="exploria-title text-5xl sm:text-6xl md:text-7xl mb-4">AIKYAM</h1>
          <p className="text-yellow-500 subtitle text-lg sm:text-xl mb-2">by Team Elite Eagles</p>
          <p className="subtitle text-orange-500 text-xl sm:text-2xl">Unleashing Excellence, Inspiring Innovation</p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl p-6 border border-yellow-500/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-bold text-yellow-500">Event Starts In</h2>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + (index * 0.1) }}
                className="bg-gradient-to-br from-yellow-900/50 to-red-900/50 p-3 sm:p-4 rounded-lg text-center"
              >
                <motion.div 
                  className="text-2xl sm:text-4xl font-bold text-yellow-500"
                  animate={{ scale: item.label === 'Seconds' ? [1, 1.1, 1] : 1 }}
                  transition={{ 
                    repeat: item.label === 'Seconds' ? Infinity : 0,
                    duration: 1
                  }}
                >
                  {item.value < 10 ? `0${item.value}` : item.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-yellow-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-12">
          <motion.button
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 8px rgb(251, 191, 36)",
              boxShadow: "0 0 20px rgb(251, 191, 36)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/competitions')}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-red-600 to-orange-700 text-white rounded-lg text-xl font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Register
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 8px rgb(251, 191, 36)",
              boxShadow: "0 0 20px rgb(251, 191, 36)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/about')}
            className="px-8 py-4 bg-gradient-to-r from-orange-700 via-red-600 to-yellow-500 text-white rounded-lg text-xl font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            About Us
          </motion.button>
        </div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="max-w-4xl mx-auto mt-16 bg-black/40 rounded-xl p-6 border border-yellow-500/20"
        >
          <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
            >
              <Mail className="text-yellow-500 mb-2" size={28} />
              <h3 className="text-yellow-400 font-semibold mb-1">Email</h3>
              <a href="mailto:eliteeagles@example.com" className="text-white hover:text-yellow-300 transition-colors">
               mapruthvik@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
            >
              <Phone className="text-yellow-500 mb-2" size={28} />
              <h3 className="text-yellow-400 font-semibold mb-1">Phone</h3>
              <a href="tel:+919876543210" className="text-white hover:text-yellow-300 transition-colors">
                +91 8970653305
              </a>
            </motion.div>
            
            <a href="https://www.bing.com/search?q=vivekananda+college+address&qs=UT&pq=vivekananda+college+add&sc=12-23&cvid=CBA6E4E6A902436888565E7488EEB337&FORM=QBRE&sp=1&ghc=1&lq=0" target="_blank" rel="noreferrer">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
              >
              <MapPin className="text-yellow-500 mb-2" size={28} />
              <h3 className="text-yellow-400 font-semibold mb-1" >Address</h3>
              <p className="text-white text-center">
              Nehru Nagar - Bannur - Haradi Road, Nehru Nagar, Puttur, Karnataka 574203 
              </p>
            </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;