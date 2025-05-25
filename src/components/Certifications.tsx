
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      issueDate: 'March 2024',
      expiryDate: 'March 2027',
      credentialId: 'AWS-DEV-2024-001',
      description: 'Demonstrates expertise in developing and maintaining applications on AWS platform with focus on serverless architectures.',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation', 'S3', 'EC2'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google Cloud',
      issueDate: 'January 2024',
      expiryDate: 'January 2026',
      credentialId: 'GCP-DEV-2024-002',
      description: 'Validates ability to design, build, and deploy scalable applications using Google Cloud technologies.',
      skills: ['Cloud Functions', 'Kubernetes', 'Cloud SQL', 'Pub/Sub', 'Cloud Storage', 'Firebase'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      issueDate: 'November 2023',
      expiryDate: 'No Expiry',
      credentialId: 'MS-AZ900-2023-003',
      description: 'Foundation-level knowledge of cloud services and how those services are provided with Microsoft Azure.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Privacy', 'Compliance', 'Pricing'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Meta (via Coursera)',
      issueDate: 'September 2023',
      expiryDate: 'No Expiry',
      credentialId: 'META-FE-2023-004',
      description: 'Comprehensive program covering modern frontend development practices and Meta\'s development standards.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design', 'Version Control', 'Testing'],
      verificationUrl: '#',
      status: 'Active'
    },
    {
      id: 5,
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      issueDate: 'July 2023',
      expiryDate: 'July 2025',
      credentialId: 'MDB-DEV-2023-005',
      description: 'Demonstrates proficiency in MongoDB database development, aggregation, and performance optimization.',
      skills: ['MongoDB', 'Aggregation Framework', 'Indexing', 'Schema Design', 'Performance Tuning', 'Security'],
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
            to continuous learning in cutting-edge technologies.
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
