
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Zap, Layout, Settings } from 'lucide-react';

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('Programming Languages');

  const skillTabs = [
    {
      name: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C++', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-500' },
        { name: 'Python', level: 55, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML/CSS', level: 100, color: 'from-orange-400 to-red-500' }
      ]
    },
    {
      name: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-blue-500' },
        { name: 'UI/UX Design', level: 70, color: 'from-pink-400 to-purple-500' },
        { name: 'Responsive Design', level: 85, color: 'from-indigo-400 to-purple-500' }
      ]
    },
    {
      name: 'Backend',
      icon: Settings,
      skills: [
        { name: 'Node.js', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'RESTful APIs', level: 85, color: 'from-blue-500 to-indigo-600' },
        { name: 'MongoDB', level: 65, color: 'from-green-600 to-teal-600' }
      ]
    },
    {
      name: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Figma', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Firebase', level: 75, color: 'from-yellow-500 to-orange-600' },
        { name: 'Flutter', level: 80, color: 'from-blue-400 to-cyan-500' },
        { name: 'Android', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'iOS', level: 75, color: 'from-gray-400 to-gray-600' }
      ]
    }
  ];

  const activeSkills = skillTabs.find(tab => tab.name === activeTab)?.skills || [];

  return (
    <section id="technical-skills" className="py-20 px-4 bg-[#1a1a2e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <Code size={24} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Technical Skills
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            My technical toolkit spans multiple domains, from low-level programming to modern web development frameworks.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillTabs.map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.name
                  ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <tab.icon size={18} />
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              {/* Skill Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Code size={20} className="text-white" />
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>

              {/* Proficiency */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Proficiency</span>
                  <span className="text-white font-medium">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
