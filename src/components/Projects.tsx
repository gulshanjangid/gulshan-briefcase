
import { motion } from 'framer-motion';
import { useState } from 'react';
import Card3D from './animations/Card3D';
import ParallaxText from './animations/ParallaxText';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'RAW Coworking Space',
      description: 'A comprehensive Flutter mobile application designed to revolutionize the coworking experience. Features seamless workspace management, integrated payment processing, smart booking system, and a powerful admin dashboard for real-time operations monitoring and member management.',
      tech: ['Flutter', 'Android', 'iOS', 'Firebase', 'Payment Gateway', 'Real-time Database', 'Push Notifications'],
      duration: 'Jun 2025 - Jul 2025',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 2,
      title: 'SmartCV AI/ Resume Builder',
      description: 'Developed an AI-powered Resume Builder using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Implemented AI-driven suggestions for content, formatting, and keyword optimization with dynamic resume templates and real-time editing capabilities.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI/ML', 'PDF Export'],
      duration: 'Jan 2025 - Feb 2025',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 3,
      title: 'AI Chatbot for Customer Support',
      description: 'Developed an intelligent, location-aware customer support chatbot with personalized interactions based on user\'s IP address, local festivals, culture, holidays, weather, and health updates. Features time-sensitive messaging and multi-channel communication options.',
      tech: ['AI/ML', 'Location Services', 'WhatsApp API', 'Node.js', 'Real-time Chat'],
      duration: 'Sep 2024 - Dec 2024',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Education website - FlyengCareer.com',
      description: 'FlyengCareer is an online educational platform dedicated to delivering structured, high-quality content for undergraduate studies and competitive exam preparation. Offers meticulously curated resources and expert guidance.',
      tech: ['Web Development', 'Educational Platform', 'Content Management', 'Responsive Design'],
      duration: 'July 2023 - Sep 2023',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxText speed={0.3} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and passion projects that demonstrate 
              my skills in modern web development and AI integration.
            </p>
          </motion.div>
        </ParallaxText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card3D 
                className="h-full"
                intensity={20}
              >
                <div className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <motion.div 
                      className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                      <span className="text-white text-lg font-bold text-center px-4">{project.title}</span>
                    </motion.div>
                    
                    {/* Floating particles on hover */}
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary rounded-full"
                            initial={{
                              x: Math.random() * 200,
                              y: Math.random() * 200,
                              opacity: 0,
                            }}
                            animate={{
                              y: [null, -20],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-secondary font-medium mt-1">
                        {project.duration}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 px-4 py-2 bg-gradient-primary text-background font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
