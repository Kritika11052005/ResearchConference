import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const organizers = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      title: 'General Chair',
      affiliation: 'Manipal University Jaipur',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading expert in artificial intelligence and machine learning with over 20 years of academic experience.',
      specialization: 'General Chair',
      email: 'rajesh.kumar@icmain2027.edu',
      linkedin: 'https://linkedin.com/in/rajeshkumar'
    },
    {
      id: '2',
      name: 'Prof. Priya Sharma',
      title: 'Program Chair',
      affiliation: 'Manipal University Jaipur',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Renowned researcher in computer science and innovation with extensive conference organizing experience.',
      specialization: 'Program Chair',
      email: 'priya.sharma@icmain2027.edu',
      linkedin: 'https://linkedin.com/in/priyasharma'
    },
    {
      id: '3',
      name: 'Dr. Amit Patel',
      title: 'Technical Chair',
      affiliation: 'Manipal University Jaipur',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in technical systems and conference infrastructure with focus on emerging technologies.',
      specialization: 'Technical Chair',
      email: 'amit.patel@icmain2027.edu',
      linkedin: 'https://linkedin.com/in/amitpatel'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Committee</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team behind ICMAIN 2027, working tirelessly to bring you an exceptional conference experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizers Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {organizers.map((organizer, index) => (
              <motion.div
                key={organizer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Round Profile Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  {/* Specialization Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {organizer.specialization}
                    </span>
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {organizer.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {organizer.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {organizer.affiliation}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-center">
                  {organizer.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${organizer.email}`}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={organizer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ICMAIN Event Contact */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Contact ICMAIN 2027</h3>
              <p className="text-indigo-100 mb-6">
                For general inquiries about the event, feel free to reach out to us via email or connect with us on LinkedIn.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=researchconferencemuj@gmail.com"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Mail size={24} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/icmain2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;