
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Eye, Palette, Sparkles } from 'lucide-react';

const FreelanceWork = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const freelanceProjects = [
    {
      id: 1,
      title: 'Extint Decor - Soundproofing Services',
      category: 'Social Media Marketing',
      description: 'Complete brand identity and social media campaign for acoustic solutions company',
      images: [
        '/lovable-uploads/1e417f4d-6159-480a-9976-16d8eadb26b6.png',
        '/lovable-uploads/4bc0df91-1f19-4511-95cd-3b6d14351320.png',
        '/lovable-uploads/42860f3a-f433-404e-b062-31434c97a3b7.png',
        '/lovable-uploads/b6a5ce3f-d115-474a-84a0-3b2e22723fe5.png'
      ],
      tools: ['Canva', 'Photoshop', 'Illustrator'],
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Utilaiz - E-commerce Campaigns',
      category: 'Product Design',
      description: 'Modern e-commerce promotional designs and product showcases',
      images: [
        '/lovable-uploads/fe9d207f-b347-4274-8d34-d96a1f9d9278.png',
        '/lovable-uploads/86ca1f4f-0e92-4c74-a309-7777a35a214e.png',
        '/lovable-uploads/b0ff9cb1-d274-45d9-878b-90eb572f1f1d.png',
        '/lovable-uploads/8e81e5e9-f733-4028-ac8f-dcc8d8beadc6.png'
      ],
      tools: ['Photoshop', 'After Effects', 'Canva'],
      color: 'from-yellow-500 to-red-500'
    },
    {
      id: 3,
      title: 'Astroguru Vinod Ji - Celebrity Astrologer',
      category: 'Brand Identity & Marketing',
      description: 'Professional astrology service branding with mystic and celestial design elements',
      images: [
        '/lovable-uploads/db2979ff-10a2-4d99-bf5f-e71b6c0a1730.png',
        '/lovable-uploads/8673133a-1221-4f63-b83c-9893106a7d38.png',
        '/lovable-uploads/220d92b7-f41c-4d92-87a0-2cb7fcbe68e3.png',
        '/lovable-uploads/02064c92-365c-4cdf-bbfe-c65316accebc.png'
      ],
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Elder Project Limited - Skincare Products',
      category: 'Product Marketing & E-commerce',
      description: 'Premium skincare product designs with modern aesthetics and health-focused messaging',
      images: [
        '/lovable-uploads/bbc6ce00-14ca-46ac-a03c-aad22c4bb8d7.png',
        '/lovable-uploads/bd1d9b11-7d10-4872-9af1-60ad9bfcdf94.png',
        '/lovable-uploads/79a6352b-79bb-4b21-8b39-751ac424530a.png',
        '/lovable-uploads/33146475-42a4-4c5e-86d0-77e625243122.png'
      ],
      tools: ['Photoshop', 'Canva', 'Illustrator'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const allImages = freelanceProjects.flatMap(project => 
    project.images.map((img, index) => ({
      src: img,
      project: project.title,
      index: index + project.id * 10
    }))
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Palette className="text-purple-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold text-gradient">
              Freelance Work
            </h2>
            <Sparkles className="text-yellow-400" size={32} />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative graphic designs crafted with passion using modern tools like 
            <span className="text-purple-400 font-semibold"> Canva</span>, 
            <span className="text-blue-400 font-semibold"> Photoshop</span>, and 
            <span className="text-orange-400 font-semibold"> Illustrator</span>
          </p>
        </motion.div>

        {/* Continuous Moving Gallery */}
        <motion.div
          className="mb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * allImages.length]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${(allImages.length * 2) * 300}px` }}
          >
            {[...allImages, ...allImages].map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={`Design work ${image.index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredWork(project.id)}
              onHoverEnd={() => setHoveredWork(null)}
              className="group"
            >
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-purple-400 font-medium">{project.category}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  >
                    <Eye className="text-white" size={20} />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + toolIndex * 0.05 }}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.images.slice(0, 4).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="relative aspect-square rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} design ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover overlay */}
                      {hoveredWork === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-2"
                        >
                          <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            className="text-white text-xs font-medium"
                          >
                            View Design
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  View Full Project
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: '75+', icon: '🎨' },
            { label: 'Happy Clients', value: '40+', icon: '😊' },
            { label: 'Design Tools', value: '8+', icon: '🛠️' },
            { label: 'Years Experience', value: '3+', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceWork;
