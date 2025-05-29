
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      type: 'education',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science Engineering',
      company: 'Rajasthan Technical University',
      location: 'Jaipur, Rajasthan',
      date: '2020 - 2024',
      description: 'Focused on software development, data structures, algorithms, and web technologies.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      subtitle: 'Web Development',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Jaipur, Rajasthan',
      date: '2023 - 2024',
      description: 'Developed responsive web applications using React.js, Node.js, and MongoDB.',
      icon: Briefcase,
      color: 'from-green-400 to-green-600'
    },
    {
      type: 'achievement',
      title: 'Competitive Programming',
      subtitle: 'Multiple Platform Achievements',
      company: 'LeetCode, CodeChef, HackerEarth',
      location: 'Online',
      date: '2022 - Present',
      description: 'Solved 500+ problems, earned multiple badges, and maintained consistent coding streaks.',
      icon: Calendar,
      color: 'from-yellow-400 to-orange-400'
    },
    {
      type: 'project',
      title: 'Portfolio Website',
      subtitle: 'Personal Branding Project',
      company: 'Self Project',
      location: 'Remote',
      date: '2024',
      description: 'Built a modern portfolio website showcasing skills, projects, and achievements.',
      icon: Briefcase,
      color: 'from-purple-400 to-purple-600'
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
            Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through education, work, and personal development
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${event.color} rounded-full border-4 border-[#16213e] z-10`}></div>

              {/* Content */}
              <div className="ml-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center`}>
                      <event.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-yellow-400 font-medium">{event.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                    {event.date}
                  </span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
