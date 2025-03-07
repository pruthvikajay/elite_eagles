import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trophy, X } from 'lucide-react';
import reel from '../public/assets/reel.jpg';
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
import anvita from '../public/assets/anvita.jpg';
import danya from '../public/assets/danya.jpg';
import sutra from '../public/assets/sutra.jpg';
import chakra from '../public/assets/chakra.jpg';
import ranga from '../public/assets/ranga.jpg';
import rosoi from '../public/assets/rosoi.jpg';
import tantra from '../public/assets/tantra.jpg';
import khel from '../public/assets/khel.jpg';
const competitions = [
  {
    id: 'code-warriors',
    title: 'Sutra Canvas(Code Design)',
    description: '',
    time: '2:30 PM - 4:30 PM',
    participants: '2',
    rules: [ 'Two members make a team',
      'Should have the knowledge of java,C and web technologies',
      'Number of rounds - 3'
      ],
    logo: sutra,
    coordinators: [
      {
        name: 'Vandya M',
        role: 'Event Coordinator',
        Mobile_no: '8618237055',
        image: vandya
      },
      {
        name: 'Biya Johnson',
        role: 'Event Coordinator',
        Mobile_no: '9972237358',
        image: biya
      },
    ],
  },
  {
    id: 'robo-race',
    title: 'Chakravyuh(Surprise Event)',
    description: '',
    time: '2:30 PM - 4:30 PM',
    participants: '2',
    rules: [ 'Two members make a team',
       'Number of rounds - 4',
      'Brace yourself - The surprise awaits!'
      ],
    logo: chakra,
    coordinators: [
      {
        name: 'Sinchana L',
        role: 'Event Coordinator',
        Mobile_no: '7975001297',
        image: sinchana
      },
      {
        name: 'Shifali',
        role: 'Event Coordinator',
        image: shifali
      },
    ],
  },
  {
    id: 'hack-quest',
    title: 'Reel Rang(Reel-a-Thon)',
    description: '',
    time: '2:30 pM - 4:30 PM',
    participants: '1',
    rules: ['Topic is given on the spot',
      'Duration is between 30sec to 1min',
      'Shoot in portrait mode',
      'Individual participant'
      ],
    logo: reel,
    coordinators: [
      {
        name: 'Jeevan K',
        role: 'Event Coordinator',
        Mobile_no: '8431486175',
        image: jeevan
      },
      {
        name: 'Rachan Gowda',
        role: 'Event Coordinator',
        Mobile_no: '6363287314',
        image: rachan
      },
    ],
  },
  {
    id: 'innovation-summit',
    title: 'Rangmanch(Fashion Show)',
    description: '',
    time: '4:00 PM - 4:45 PM',
    participants: ' 4 +1 ( including team coordinator)',
    rules: ['Number of participants 4 +1 ( including team coordinator)',
      'Time limit 4+1 Minutes',
      'Introduction of your team',
      'Judges will score based on creativity, style, presentation, and overall confidence'],
    logo: ranga,
    coordinators: [
      {
        name: 'Pruthvik',
        role: 'Event Coordinator',
        Mobile_no: '8970653305',
        image: pruthvik
      },
      {
        name: 'Jovita Dcosta',
        role: 'Event Coordinator',
        Mobile_no: '9740965749',
        image: jovita
      },
    ],
  },
  {
    id: 'ai-challenge',
    title: 'Rasoi Rang(Food Mela )',
    description: '',
    time: '2:30 PM - 4:00 PM',
    participants: '4',
    rules: ['Number of participants - 4',
      'Time given - 1hr',
      'Note : Do bring necessary items by yourself'
      ],
    logo: rosoi,
    coordinators: [
      {
        name: 'Meghana M',
        role: 'Event Coordinator',
        Mobile_no: '7019455044',
        image: megana
      },
      {
        name: 'Anvitha Mayya',
        role: 'Event Coordinator',
        Mobile_no: '8105092598',
        image: anvita
      },
      {
        name: 'Danya M A',
        role: 'Event Coordinator',
        Mobile_no: '9480547924',
        image: danya
      },
    ],
  },
  {
    id: 'tech-olympiad',
    title: 'Tantra Nayak(IT Manager)',
    description: '',
    time: '2:30 PM - 4:30 PM',
    participants: '1',
    rules: ['Number of rounds - 3',
      'Individual participant',
      'Participant should carry updated resume (Hard Copy)'
      ],
    logo: tantra,
    coordinators: [
      {
        name: 'Nithyananda Gowda',
        role: 'Event Coordinator',
        Mobile_no: '7338502157',
        image:nityananda 
      },
      {
        name: 'Vidyashree R',
        role: 'Event Coordinator',
        Mobile_no: '8904011343',
        image: vidya
      },
    ],
  },
  {
    id: 'Gaming',
    title: 'Khel Rang(Gaming)',
    description: '',
    time: '2:30 PM - 4:30 PM',
    participants: '1',
    rules: ['Number of rounds - 2',
      'Individual participant'
      ],
    logo: khel,
    coordinators: [
      {
        name: 'Sanath P V',
        role: 'Event Coordinator',
        Mobile_no: '8792182373',
        image: sanath
      },
      {
        name: 'Rakshith B',
        role: 'Event Coordinator',
        image: rakshith
      },
    ],
  },
];

interface Coordinator {
  name: string;
  role: string;
  Mobile_no?: string;
  image: string;
}

interface Competition {
  id: string;
  title: string;
  description: string;
  time: string;
  participants: string;
  rules: string[];
  logo: string;
  coordinators: Coordinator[];
}

const CoordinatorModal = ({ competition, onClose }: { competition: Competition; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-black/90 p-8 rounded-xl max-w-2xl w-full border border-yellow-500/30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-yellow-500">{competition.title} Coordinators</h3>
        <button
          onClick={onClose}
          className="text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competition.coordinators.map((coordinator, index) => (
          <motion.div
            key={coordinator.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={coordinator.image}
                alt={coordinator.name}
                

                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-yellow-500">{coordinator.name}</h4>
              <p className="text-orange-400">{coordinator.role}</p>
              {coordinator.Mobile_no && ( // Conditional rendering
                <p className="text-gray-300">Mobile: {coordinator.Mobile_no}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const CompetitionCard = ({ competition, onShowCoordinators }: { competition: Competition; onShowCoordinators: (competition: Competition) => void }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
      <motion.div
        className="relative bg-black/80 border border-yellow-500/20 p-6 rounded-xl h-full"
      >
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-yellow-500">{competition.title}</h3>
        </div>
        
        {/* Single round logo holder */}
        <div className="flex justify-center mb-6">
          <motion.div 
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-yellow-500/50 relative group"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={competition.logo} 
              alt={competition.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </motion.div>
        </div>

        <div className="text-white space-y-2">
          <p className="text-lg">{competition.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⏰</span>
            <p>{competition.time}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">👥</span>
            <p>Team Size: {competition.participants}</p>
          </div>
          <div className="mt-4">
            <h4 className="text-yellow-500 font-semibold mb-2">Rules:</h4>
            <ul className="list-disc list-inside space-y-1">
              {competition.rules.map((rule, idx) => (
                <li key={idx} className="text-sm text-gray-300">{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => onShowCoordinators(competition)}
            className="bg-gradient-to-r from-yellow-800 to-red-900 p-px rounded-full overflow-hidden"
          >
            <div className="bg-black rounded-full p-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate(`/register/${competition.id}`)}
            className="bg-gradient-to-r from-yellow-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Register
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Competitions = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-red-950 py-16 px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="exploria-title text-4xl sm:text-5xl text-center mb-12"
      >
        Competitions
      </motion.h2>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CompetitionCard
                competition={competition}
                onShowCoordinators={setSelectedCompetition}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCompetition && (
          <CoordinatorModal
            competition={selectedCompetition}
            onClose={() => setSelectedCompetition(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Competitions;