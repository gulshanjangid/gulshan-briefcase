
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'JavaScript certification',
      issuer: 'HackerRank',
      issueDate: '2024',
      expiryDate: 'No Expiry',
      credentialId: 'HR-JS-2024-001',
      description: 'Demonstrates proficiency in JavaScript programming language fundamentals, ES6+ features, and modern JavaScript development practices.',
      skills: ['JavaScript', 'ES6+', 'DOM Manipulation', 'Async Programming', 'Functions', 'Objects'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Mastering Java certification',
      issuer: 'KG Coding',
      issueDate: '2024',
      expiryDate: 'No Expiry',
      credentialId: 'KGC-JAVA-2024-002',
      description: 'Comprehensive Java programming certification covering core concepts, object-oriented programming, and advanced Java features.',
      skills: ['Java', 'OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading', 'JDBC'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Full Stack Web Development certification',
      issuer: 'SoloLearn',
      issueDate: '2024',
      expiryDate: 'No Expiry',
      credentialId: 'SL-FSWD-2024-003',
      description: 'Complete full stack web development certification covering frontend and backend technologies for modern web applications.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design', 'API Development'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 4,
      title: 'JavaScript (Basics) certification',
      issuer: 'KG Coding',
      issueDate: '2025',
      expiryDate: 'No Expiry',
      credentialId: 'KGC-JSB-2025-004',
      description: 'Foundation-level JavaScript certification covering basic syntax, programming concepts, and fundamental web development skills.',
      skills: ['JavaScript Basics', 'Variables & Data Types', 'Control Structures', 'Functions', 'Basic DOM', 'Problem Solving'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 5,
      title: 'React certification',
      issuer: 'HackerRank',
      issueDate: '2024',
      expiryDate: 'No Expiry',
      credentialId: 'HR-REACT-2024-005',
      description: 'Validates expertise in React.js library for building modern user interfaces and single-page applications.',
      skills: ['React.js', 'Components', 'State Management', 'Hooks', 'JSX', 'Virtual DOM'],
      verificationUrl: '#',
      status: 'Active'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Certification Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment 
            to continuous learning in programming and web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-secondary font-medium mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${
                        cert.status === 'Active' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                        <CheckCircle className="h-3 w-3" />
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {cert.issueDate}</span>
                      {cert.expiryDate !== 'No Expiry' && (
                        <span> • Expires: {cert.expiryDate}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-4 py-2 bg-gradient-primary text-background font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    Verify Certificate
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
