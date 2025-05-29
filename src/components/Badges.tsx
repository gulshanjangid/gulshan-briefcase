
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Star } from 'lucide-react';

const Badges = () => {
  const achievements = [
    {
      title: 'LeetCode 100 Days',
      description: 'Completed 100 days of consistent coding challenges',
      icon: Target,
      color: 'from-green-400 to-green-600',
      date: '2024'
    },
    {
      title: 'CodeChef Badges',
      description: 'Multiple badges earned for competitive programming',
      icon: Trophy,
      color: 'from-orange-400 to-orange-600',
      date: '2023-2024'
    },
    {
      title: 'HackerEarth Achiever',
      description: 'Top performer in coding competitions',
      icon: Star,
      color: 'from-cyan-400 to-cyan-600',
      date: '2024'
    },
    {
      title: 'Problem Solver',
      description: '500+ problems solved across platforms',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
      date: '2023-2024'
    }
  ];

  return (
    <section id="badges" className="py-20 px-4 bg-[#16213e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Achievements & Badges
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition for consistent effort and excellence in competitive programming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="text-xs text-yellow-400 font-medium">
                  {achievement.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
