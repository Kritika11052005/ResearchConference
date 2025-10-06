import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      id: '1',
      name: 'Dr. Alexandra Kim',
      title: 'Professor of Computer Science',
      affiliation: 'MIT - Artificial Intelligence Lab',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading researcher in machine learning and AI applications in healthcare with over 15 years of experience.',
      specialization: 'Machine Learning',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'alexandra.kim@mit.edu'
      }
    },
    {
      id: '2',
      name: 'Prof. Robert Singh',
      title: 'Director of Quantum Computing Lab',
      affiliation: 'Stanford University',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Pioneer in quantum algorithms and quantum machine learning applications.',
      specialization: 'Quantum Computing',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'robert.singh@stanford.edu'
      }
    },
    {
      id: '3',
      name: 'Dr. Maria Gonzalez',
      title: 'Senior Research Scientist',
      affiliation: 'Google DeepMind',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in AI ethics, responsible AI development, and algorithmic fairness.',
      specialization: 'AI Ethics',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'maria.gonzalez@deepmind.com'
      }
    },
    {
      id: '4',
      name: 'Prof. James Liu',
      title: 'Head of Robotics Institute',
      affiliation: 'Carnegie Mellon University',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Renowned for work in autonomous systems and human-robot interaction.',
      specialization: 'Robotics',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'james.liu@cmu.edu'
      }
    },
    {
      id: '5',
      name: 'Dr. Sarah Ahmed',
      title: 'Principal Researcher',
      affiliation: 'Microsoft Research',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading expert in distributed systems and edge computing architectures.',
      specialization: 'Cloud Computing',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'sarah.ahmed@microsoft.com'
      }
    },
    {
      id: '6',
      name: 'Prof. David Chang',
      title: 'Professor of Cybersecurity',
      affiliation: 'UC Berkeley',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Cybersecurity researcher focusing on blockchain and cryptographic protocols.',
      specialization: 'Cybersecurity',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'david.chang@berkeley.edu'
      }
    },
    {
      id: '7',
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      affiliation: 'IBM Research',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in augmented reality and mixed reality applications for enterprise.',
      specialization: 'Augmented Reality',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'emily.watson@ibm.com'
      }
    },
    {
      id: '8',
      name: 'Prof. Michael Brown',
      title: 'Chair of Industrial Automation',
      affiliation: 'ETH Zurich',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading researcher in Industry 4.0 and smart manufacturing systems.',
      specialization: 'Industrial Automation',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'michael.brown@ethz.ch'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Speakers</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet the distinguished researchers, industry leaders, and visionaries who will be sharing their expertise at ICMAIN 2027
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
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
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  {/* Specialization Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {speaker.specialization}
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {speaker.affiliation}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-center">
                  {speaker.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={speaker.social.linkedin}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={speaker.social.website}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Globe size={16} />
                  </a>
                  <a
                    href={`mailto:${speaker.social.email}`}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Present at ICMAIN 2027?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Submit your research and join these distinguished speakers on stage
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Your Paper
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;