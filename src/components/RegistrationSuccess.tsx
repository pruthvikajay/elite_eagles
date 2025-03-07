import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-900 to-red-900 flex items-center justify-center px-4">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="success-modal bg-black/80 p-6 sm:p-8 rounded-xl shadow-xl max-w-md w-full text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 0.5 }}
          className="text-6xl mb-6"
        >
          🦅
        </motion.div>
        
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Registration Successful!</h2>
        <p className="text-white mb-8">Thank you for registering. We'll contact you shortly with further details!</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg font-bold shadow-lg"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RegistrationSuccess;