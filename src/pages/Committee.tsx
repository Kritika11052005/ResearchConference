import { Users, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Committee = () => {
  const committeeMembers = [
    {
      category: "Conference Chairs",
      members: [
        {
          name: "Dr. John Smith",
          role: "General Chair",
          affiliation: "MIT, USA",
          email: "j.smith@mit.edu",
          bio: "Dr. Smith is a leading researcher in AI and machine learning with over 20 years of experience."
        },
        {
          name: "Dr. Sarah Johnson",
          role: "Co-Chair",
          affiliation: "Stanford University, USA",
          email: "s.johnson@stanford.edu",
          bio: "Expert in computer vision and deep learning applications."
        }
      ]
    },
    {
      category: "Technical Program Committee",
      members: [
        {
          name: "Dr. Michael Chen",
          role: "Program Chair",
          affiliation: "University of Cambridge, UK",
          email: "m.chen@cam.ac.uk",
          bio: "Specializes in robotics and autonomous systems."
        },
        {
          name: "Dr. Lisa Wang",
          role: "Technical Co-Chair",
          affiliation: "ETH Zurich, Switzerland",
          email: "l.wang@ethz.ch",
          bio: "Research focus on industrial automation and IoT systems."
        }
      ]
    },
    {
      category: "Organizing Committee",
      members: [
        {
          name: "Dr. Robert Brown",
          role: "Local Arrangements Chair",
          affiliation: "University of Technology, India",
          email: "r.brown@tech.edu",
          bio: "Expert in conference organization and academic collaboration."
        },
        {
          name: "Dr. Emma Davis",
          role: "Registration Chair",
          affiliation: "Technical University, Germany",
          email: "e.davis@tu.de",
          bio: "Specializes in event management and participant coordination."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Organizing
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Committee</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Meet the distinguished academics and industry experts leading ICMAIN 2027
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Sections */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {committeeMembers.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                {section.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: memberIndex * 0.1 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span className="text-sm">{member.affiliation}</span>
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <Mail size={16} className="mr-2 text-blue-500" />
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-sm hover:text-blue-600 transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Committee
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Interested in contributing to ICMAIN 2027? We welcome academic and industry professionals to join our organizing efforts.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Committee;