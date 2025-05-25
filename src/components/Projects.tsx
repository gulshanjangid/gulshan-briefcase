
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'SmartCV AI/ Resume Builder',
      description: 'Developed an AI-powered Resume Builder using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Implemented AI-driven suggestions for content, formatting, and keyword optimization with dynamic resume templates and real-time editing capabilities.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI/ML', 'PDF Export'],
      duration: 'Jan 2025 - Feb 2025',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'AI Chatbot for Customer Support',
      description: 'Developed an intelligent, location-aware customer support chatbot with personalized interactions based on user\'s IP address, local festivals, culture, holidays, weather, and health updates. Features time-sensitive messaging and multi-channel communication options.',
      tech: ['AI/ML', 'Location Services', 'WhatsApp API', 'Node.js', 'Real-time Chat'],
      duration: 'Sep 2024 - Dec 2024',
      image: '/placeholder.svg',
      link: '#',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and passion projects that demonstrate 
            my skills in modern web development and AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: hoveredProject === project.id ? 5 : 0,
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                  <span className="text-white text-lg font-bold text-center px-4">{project.title}</span>
                </motion.div>
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
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
