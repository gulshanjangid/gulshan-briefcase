
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const FloatingIcon = ({ type, position }: { type: string; position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  const color = type === 'education' ? '#3b82f6' : type === 'work' ? '#10b981' : '#f59e0b';

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Timeline3D = () => {
  return (
    <div className="h-64 rounded-lg overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 mb-8">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
        
        <FloatingIcon type="education" position={[-3, 2, 0]} />
        <FloatingIcon type="work" position={[0, 0, 0]} />
        <FloatingIcon type="work" position={[3, -1, 0]} />
        <FloatingIcon type="work" position={[-2, -2, 0]} />
        
        <Text
          position={[0, -3, 0]}
          fontSize={0.8}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          My Journey
        </Text>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

const Timeline = () => {
  const timelineEvents = [
    {
      type: 'education',
      title: 'B Tech (CSE) + Minor in Print Media Design and Production',
      subtitle: 'Computer Science Engineering',
      company: 'Amity University, Rajasthan',
      location: 'Jaipur, Rajasthan',
      date: '2022 - 2026',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with a minor degree in Print Media Design and Production. Focused on software development, algorithms, modern programming paradigms, and media design principles.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'education',
      title: '12th Standard',
      subtitle: 'Science Stream',
      company: 'Krishna Vidya Mandir, Alwar',
      location: 'Alwar, Rajasthan',
      date: '2020 - 2022',
      description: 'Completed senior secondary education with excellent performance in Science stream (88.87%), building a strong foundation for engineering studies.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'work',
      title: 'Graphic Designer',
      subtitle: 'Part-time',
      company: 'Media Fourth',
      location: 'Part-time',
      date: 'Sep, 2024 - Present (9 Months)',
      description: 'Creating visual concepts to communicate ideas that inspire, inform, and captivate consumers. Designing logos, website layouts, and marketing materials.',
      icon: Briefcase,
      color: 'from-green-400 to-green-600'
    },
    {
      type: 'work',
      title: 'Front-End Web Developer',
      subtitle: 'ReactJs Intern',
      company: 'Celebal Technologies Pvt Ltd',
      location: 'Internship',
      date: 'May, 2025 - Present (Less than a month)',
      description: 'Developing and implementing user-friendly web interfaces using ReactJs to build responsive and interactive web applications.',
      icon: Briefcase,
      color: 'from-green-400 to-green-600'
    },
    {
      type: 'work',
      title: 'Web Developer',
      subtitle: 'Web Development Intern',
      company: 'Internpe',
      location: 'Internship',
      date: 'May, 2024 - Aug, 2024 (2 Months)',
      description: 'Developed and maintained web applications utilizing front-end and back-end development skills to create user-friendly interfaces and ensure optimal performance.',
      icon: Briefcase,
      color: 'from-green-400 to-green-600'
    },
    {
      type: 'education',
      title: '10th Standard',
      subtitle: 'Secondary Education',
      company: 'Krishna Vidya Mandir, Alwar',
      location: 'Alwar, Rajasthan',
      date: '2018 - 2020',
      description: 'Completed secondary education with good academic performance (67.87%), developing foundational knowledge across various subjects.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-[#16213e]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            My Journey Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive timeline of my educational background and professional experience
          </p>
        </motion.div>

        {/* 3D Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Timeline3D />
          <p className="text-center text-gray-400 text-sm mb-12">
            🖱️ Interactive 3D Timeline - Click and drag to explore • Scroll to zoom
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-400"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${event.color} rounded-full border-4 border-[#16213e] z-10`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              ></motion.div>

              {/* Content */}
              <motion.div 
                className="ml-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 w-full hover:border-yellow-400/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`w-10 h-10 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <event.icon size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-yellow-400 font-medium">{event.subtitle}</p>
                    </div>
                  </div>
                  <motion.span 
                    className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full"
                    whileHover={{ backgroundColor: 'rgb(75 85 99)' }}
                  >
                    {event.date}
                  </motion.span>
                </div>

                <div className="mb-3">
                  <p className="text-gray-300 font-medium">{event.company}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {event.description}
                </p>

                {/* Type badge */}
                <div className="mt-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    event.type === 'education' 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}>
                    {event.type === 'education' ? 'Education' : 'Work Experience'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
