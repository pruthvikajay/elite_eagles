import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import rakshith from '../public/assets/rakshith.jpg';
import jovita from '../public/assets/jovita.jpg';
import vandya from '../public/assets/vandya.jpg';
import nityananda from '../public/assets/nityananda.jpg';
import jeevan from '../public/assets/jeevan.jpg';
import sinchana from '../public/assets/sinchana.jpg';
import shifali from '../public/assets/shifali.jpg';
import biya from '../public/assets/biya.jpg';
import pruthvik from '../public/assets/pruthvik.jpg';
import sanath from '../public/assets/sanath.jpg';
import rachan from '../public/assets/rachan.jpg';
import vidya from '../public/assets/vidya.jpg';
import megana from '../public/assets/meghana.jpg';
import sir from '../public/assets/sir.jpg';
import anvita from '../public/assets/anvita.jpg';
import danya from '../public/assets/danya.jpg';
const teamNames = [
  "Tech Wise",
  "Tech Rockers",
  "Code Nest",
  "Cypher Sprinters",
  "Dominators"
];

const teamMembers = [
 
  {
    level: 1,
    members: [{
      name: 'Prof Anil Kumar K',
      role: 'Staff Coordinator',
      image: sir
    }]
  },
  {
    level: 2,
    members: [
      {
        name: 'Vandya M',
        role: 'Student Coordinator',
        image: vandya
      },
      {
        name: 'Nithyananda Gowda Neriya',
        role: 'Student Coordinator',
        image: nityananda
      }
    ]
  },
  {
    level: 3,
    members: [
      {
        name: 'Rakshith B',
        role: 'Student Coordinator',
        image: rakshith
      },
      {
        name: 'Jovita Dcosta',
        role: 'Student Coordinator',
        image:jovita
      },
      {
        name: 'Jeevan K',
        role: 'Student Coordinator',
        image: jeevan
      }
    ]
  },
  {
    level: 4,
    members: [
      {
        name: 'sinchana L',
        role: 'Student Coordinator',
        image: sinchana
      },
      {
        name: 'Shifali',
        role: 'Student Coordinator',
        image: shifali
      },
      {
        name: 'Biya Johnson',
        role: 'Student Coordinator',
        image: biya
      },
      {
        name: 'Vidyashree R',
        role: 'Student Coordinator',
        image: vidya
      }
    ]
  },
  {
    level: 5,
    members: [
      {
        name: 'Meghana M',
        role: 'Student Coordinator',
        image: megana
      },
      {
        name: 'Anvitha Mayya K G',
        role: 'Student Coordinator',
        image: anvita
      },
      {
        name: 'Rachan Gowda',
        role: 'Student Coordinator',
        image: rachan
      }
    ]
  },
  {
    level: 6,
    members: [
      {
        name: 'Pruthvik',
        role: 'Student Coordinator',
        image: pruthvik
      },
      {
        name: 'Sanath P V',
        role: 'Student Coordinator',
        image: sanath
      },
      {
        name: 'Danya M A',
        role: 'Student Coordinator',
        image: danya
      }
    ]
  }
];

interface Member {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ member }: { member: Member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="member-card"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="member-info">
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
    </div>
  </motion.div>
);

const TreeConnector = () => (
  <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-yellow-400 to-amber-700" />
);

const TeamTree = () => (
  <div className="relative max-w-7xl mx-auto px-4">
    {teamMembers.map((level, levelIndex) => (
      <div key={level.level} className="relative">
        {levelIndex > 0 && <TreeConnector />}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: levelIndex * 0.2 }}
          className="relative flex flex-wrap justify-center gap-4 sm:gap-8 mb-20"
        >
          {level.members.map((member, memberIndex) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: memberIndex * 0.1 + levelIndex * 0.2 }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    ))}
  </div>
);

const StarRating = ({ rating, setRating }: { rating: number; setRating: React.Dispatch<React.SetStateAction<number>> }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Star
            size={36}
            className={`star ${star <= (hover || rating) ? 'filled' : 'empty'}`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            strokeWidth={1.5}
            fill={star <= (hover || rating) ? 'currentColor' : 'none'}
          />
        </motion.div>
      ))}
    </div>
  );
};

const FeedbackSuccess = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
  >
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="bg-gradient-to-br from-black via-orange-900 to-red-900 p-8 rounded-xl shadow-xl max-w-md w-full text-center mx-4"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 0.5 }}
        className="text-6xl mb-6"
      >
        ⭐
      </motion.div>
      
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Thank You!</h2>
      <p className="text-white mb-8">Your feedback has been submitted successfully. We appreciate your input!</p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg font-bold shadow-lg"
      >
        Close
      </motion.button>
    </motion.div>
  </motion.div>
);

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [teamName, setTeamName] = useState(teamNames[0]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setRating(0);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto mt-16 bg-gradient-to-br from-yellow-900/90 via-red-950/90 to-orange-950/90 p-6 sm:p-8 rounded-xl shadow-2xl border border-yellow-500/30"
      >
        <h3 className="text-center text-2xl sm:text-3xl font-bold text-yellow-500 mb-8">Rate Your Experience</h3>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full">
              <label className="block text-yellow-500 mb-2">Team Name</label>
              <select
                className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              >
                {teamNames.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <StarRating rating={rating} setRating={setRating} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-700 text-white font-bold rounded-lg shadow-lg transform hover:shadow-yellow-400/50 hover:shadow-xl transition-all duration-300"
            >
              Submit Rating
            </motion.button>
          </div>
        </form>
      </motion.div>

      <AnimatePresence>
        {showSuccess && <FeedbackSuccess onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-yellow-950 to-amber-950 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl sm:text-4xl font-bold text-yellow-500 mb-8 sm:mb-12"
        >
          About Our Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-2xl sm:text-3xl mb-6 text-yellow-400 font-semibold">
            Empowering Innovation, Fostering Excellence
          </p>
          <p className="text-lg sm:text-xl text-yellow-200/90">
            Elite Eagles is a prestigious college association dedicated to nurturing talent,
            fostering innovation, and building tomorrow's leaders through cutting-edge
            technical competitions and collaborative projects.
          </p>
        </motion.div>

        <TeamTree />
        <FeedbackForm />
      </div>
    </div>
  );
};

export default AboutUs;