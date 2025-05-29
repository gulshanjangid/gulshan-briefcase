
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Trophy, Target, Star, Code, Globe, Zap, BookOpen, Users } from 'lucide-react';

const EnhancedBadges = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'DSA', 'Web Dev', 'Hackathons', 'Achievements'];

  const badges = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      platform: 'HackerRank',
      date: 'March 2023',
      category: 'DSA',
      icon: 'H',
      color: 'from-gray-600 to-gray-800',
      description: 'Advanced problem-solving skills in data structures and algorithms'
    },
    {
      id: 2,
      title: 'React Developer Certificate',
      platform: 'Coursera',
      date: 'June 2023',
      category: 'Web Dev',
      icon: 'C',
      color: 'from-blue-500 to-blue-700',
      description: 'Comprehensive React.js development certification'
    },
    {
      id: 3,
      title: 'CodeStorm Hackathon Winner',
      platform: 'GeeksforGeeks',
      date: 'October 2023',
      category: 'Hackathons',
      icon: 'G',
      color: 'from-green-500 to-green-700',
      description: 'First place winner in competitive programming hackathon'
    },
    {
      id: 4,
      title: 'Problem Solving (Advanced)',
      platform: 'HackerRank',
      date: 'January 2024',
      category: 'DSA',
      icon: 'H',
      color: 'from-gray-600 to-gray-800',
      description: 'Advanced algorithmic problem-solving certification'
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      platform: 'Udemy',
      date: 'April 2024',
      category: 'Web Dev',
      icon: 'U',
      color: 'from-purple-500 to-purple-700',
      description: 'Complete full-stack development course certification',
      featured: true
    },
    {
      id: 6,
      title: 'AI & ML Fundamentals',
      platform: 'Coursera',
      date: 'August 2024',
      category: 'Achievements',
      icon: 'C',
      color: 'from-blue-500 to-blue-700',
      description: 'Machine learning and artificial intelligence fundamentals'
    }
  ];

  const filteredBadges = activeFilter === 'All' 
    ? badges 
    : badges.filter(badge => badge.category === activeFilter);

  return (
    <section id="badges" className="py-20 px-4 bg-[#1a1a2e] relative overflow-hidden">
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <Award size={24} className="text-black" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Badges & </span>
              <span className="text-yellow-400">Certificates</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            A curated collection of my digital credentials, showcasing continuous learning, key skills, and verified achievements across various platforms.
          </p>
          <p className="text-yellow-400 text-lg mt-4 font-medium">
            Click or tap a badge to explore in interactive 3D view.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBadges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                badge.featured 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'border-gray-700 hover:border-yellow-400/50'
              }`}
            >
              {/* Featured Badge */}
              {badge.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
              )}

              {/* Badge Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <span className="text-white text-2xl font-bold">{badge.icon}</span>
              </div>

              {/* Badge Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {badge.title}
                </h3>
                
                <p className="text-gray-400 font-medium mb-2">
                  {badge.platform}
                </p>
                
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {badge.description}
                </p>
                
                <div className="text-xs text-yellow-400 font-medium mb-4">
                  {badge.date}
                </div>

                {/* View Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedBadges;
