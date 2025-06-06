import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Globe, Brain, Smartphone, Settings, ExternalLink, Github } from 'lucide-react';

const ProjectLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = [
    { name: 'All Projects', icon: Code },
    { name: 'Web Apps', icon: Globe },
    { name: 'AI & ML', icon: Brain },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'Tools & Utilities', icon: Settings }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nexicon',
      description: 'Modern social media platform with unique content discovery features.',
      category: 'Web Apps',
      status: 'Live',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      gradient: 'from-purple-500 via-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: 'AI Code Analyzer',
      description: 'Tool for analyzing code complexity, suggesting optimizations, and visualizing algorithms.',
      category: 'AI & ML',
      status: 'Live',
      tech: ['Python', 'TensorFlow', 'React'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Website Builder',
      description: 'No-code website builder with AI-powered design and content suggestions.',
      category: 'AI & ML',
      status: 'In Progress',
      tech: ['Next.js', 'OpenAI', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600'
    },
    {
      id: 4,
      title: 'AI Image Generator',
      description: 'Advanced AI-powered image generation platform with multiple models and customization options.',
      category: 'AI & ML',
      status: 'Live',
      tech: ['React', 'Stable Diffusion', 'DALL-E', 'Python'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600'
    },
    {
      id: 5,
      title: 'Flyeng Career',
      description: 'Educational platform for programming, compiler design, and community learning.',
      category: 'Web Apps',
      status: 'In Progress',
      tech: ['React', 'Express', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      id: 6,
      title: 'Quiz Website',
      description: 'Interactive platform for creating and taking quizzes with real-time scoring.',
      category: 'Web Apps',
      status: 'In Progress',
      tech: ['React', 'Node.js', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=500&h=300&fit=crop',
      gradient: 'from-orange-400 via-red-500 to-pink-500'
    },
    {
      id: 7,
      title: 'Hospital Dashboard',
      description: 'Comprehensive healthcare management system with patient tracking.',
      category: 'Web Apps',
      status: 'In Progress',
      tech: ['React', 'Express', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500'
    }
  ];

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-[#16213e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-green-400 flex items-center justify-center">
              <Code size={24} className="text-black" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Project Library
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-6"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-overlay`}></div>
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-black'
                }`}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Project Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Discover Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-gradient-to-r from-yellow-400 to-green-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Discover
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-black font-semibold rounded-full">
            <Code size={20} />
            <span>Dive into My Code Universe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectLibrary;
