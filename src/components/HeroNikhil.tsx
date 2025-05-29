
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, ExternalLink, MessageCircle } from 'lucide-react';

const HeroNikhil = () => {
  const badges = [
    { text: 'LeetCode 100 Days', color: 'text-green-400' },
    { text: 'CodeChef Badges', color: 'text-orange-400' },
    { text: 'HackerEarth Achiever', color: 'text-cyan-400' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Code, href: '#', label: 'CodePen' },
    { icon: ExternalLink, href: '#', label: 'Portfolio' }
  ];

  return (
    <section className="min-h-screen bg-[#1a1a2e] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Hi, I'm
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Nikhil Jangid
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="glass p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              <span className="text-yellow-400 font-semibold">Full stack developer</span>
              <span className="text-white"> and </span>
              <span className="text-orange-400 font-semibold">problem solver</span>
              <span className="text-white"> crafting digital experiences.</span>
            </p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            Get in touch
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            View projects
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 hover:bg-gray-700 transition-all duration-300"
            >
              <social.icon size={20} className="text-gray-300 hover:text-yellow-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm"
            >
              <span className={`text-sm font-medium ${badge.color}`}>
                • {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <span className="text-gray-400 text-sm">Jaipur, Rajasthan</span>
          </div>
        </motion.div>
      </div>

      {/* Chat widget */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300"
        >
          <MessageCircle size={24} className="text-white" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroNikhil;
