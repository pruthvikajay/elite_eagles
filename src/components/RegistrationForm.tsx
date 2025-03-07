import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const teamNames = [
  "Tech Wise",
  "Tech Rockers",
  "Code Nest",
  "Cypher Sprinters",
  "Dominators"
];

const RegistrationForm = () => {
  const { competition } = useParams();
  const navigate = useNavigate();
  const [teamSize, setTeamSize] = useState(1);
  const [formData, setFormData] = useState({
    teamName: teamNames[0],
    competition: competition || '',
    members: Array(4).fill({ name: '' })
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-red-950 py-12 sm:py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-black/80 p-6 sm:p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 sm:mb-8">Team Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-yellow-500 mb-2">Team Name</label>
            <select
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              value={formData.teamName}
              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
              required
            >
              {teamNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-yellow-500 mb-2">Competition</label>
            <select
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              value={formData.competition}
              onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
              required
            >
              <option value="">Select Competition</option>
              <option value="code-warriors">Sutra Canvas(Code Design)</option>
              <option value="robo-race">Chakravyuh(Surprise Event)</option>
              <option value="hack-quest">Reel Rang(Reel-a-Thon)</option>
              <option value="innovation-summit">Rangmanch(Fashion Show)</option>
              <option value="ai-challenge">Rasoi Rang(Food Mela )</option>
              <option value="tech-olympiad">Tantra Nayak(IT Manager)</option>
              <option value="Gaming">Khel Rang(Gaming)</option>
            </select>
          </div>

          <div>
            <label className="block text-yellow-500 mb-2">Number of Participants</label>
            <select
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {Array.from({ length: teamSize }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4 p-4 border border-yellow-500/20 rounded-lg"
            >
              <h3 className="text-yellow-500 font-semibold">Member {idx + 1}</h3>
              <div>
                <label className="block text-yellow-500 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                  value={formData.members[idx].name}
                  onChange={(e) => {
                    const newMembers = [...formData.members];
                    newMembers[idx] = { name: e.target.value };
                    setFormData({ ...formData, members: newMembers });
                  }}
                  required
                />
              </div>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-yellow-500/30 transition-all"
          >
            Register Team
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;