import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

const teamNames = ["Tech Wise", "Tech Rockers", "Code Nest", "Cypher Sprinters", "Dominators"];

const competitions = [
  { id: "code-warriors", title: "Sutra Canvas(Code Design)" },
  { id: "robo-race", title: "Chakravyuh(Surprise Event)" },
  { id: "hack-quest", title: "Reel Rang(Reel-a-Thon)" },
  { id: "innovation-summit", title: "Rangmanch(Fashion Show)" },
  { id: "ai-challenge", title: "Rasoi Rang(Food Mela )" },
  { id: "tech-olympiad", title: "Tantra Nayak(IT Manager)" },
  { id: "Gaming", title: "Khel Rang(Gaming)" },
];

const RegistrationForm = () => {
  const { competition } = useParams();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null); // Use ref for form data
  const [teamSize, setTeamSize] = useState(1);
  const [formData, setFormData] = useState({
    teamName: teamNames[0],
    competition: competition || "",
    members: Array(4).fill({ name: "" }),
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Format the members list properly
    const membersList = formData.members
      .slice(0, teamSize) // Only include the required members
      .map((m, i) => `Member ${i + 1}: ${m.name} (${m.email})`) // Format
      .join("\n"); // Separate members by new lines
  
      const selectedCompetition = competitions.find(
        (comp) => comp.id === formData.competition
      );
      const competitionTitle = selectedCompetition ? selectedCompetition.title : formData.competition;
      
      const emailParams = {
        teamName: formData.teamName,
        competition: competitionTitle, // ✅ Now it will show the correct event name
        members: membersList, // Pass the formatted string for members
      };
  
    // Send email via EmailJS
    emailjs
      .send("service_0e5fgu9", "template_bnht89j", emailParams, "IkLvf_XBImktHMjEW")
      .then(
        () => {
          alert("Registration successful! Confirmation email sent.");
          navigate("/success");
        },
        (error) => {
          alert("Error sending email. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-red-950 py-12 sm:py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-black/80 p-6 sm:p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 sm:mb-8">
          Team Registration
        </h2>

        {/* Updated: Added formRef for EmailJS */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-yellow-500 mb-2">Team Name</label>
            <select
              name="teamName"
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50"
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
              name="competition"
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50"
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
              className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50"
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
                  name={`member_${idx}`}  // Name for EmailJS
                  className="w-full px-4 py-2 rounded bg-gray-800/50 text-white border border-yellow-500/50"
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