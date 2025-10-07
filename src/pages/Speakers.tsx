import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Speakers = () => {
  const speakers = [
    {
      id: '1',
      name: 'Mr. Manish Kumar Keshri',
      title: 'Senior Machine Learning Engineer ',
      affiliation: 'Meta',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQG61zKS_nEdVw/profile-displayphoto-shrink_400_400/B56ZX.sDj_GsAg-/0/1743734719028?e=1762992000&v=beta&t=lDP3Ozp7EOeHA9N84AMomMeyCcpztyv2F7JDgZnC45c',
      bio: 'Specialized in developing intelligent systems for content understanding, recommendations, and ad optimization at Meta.',
      specialization: 'Machine Learning',
      social: {
        linkedin: 'https://www.linkedin.com/in/manish-kumar-keshri-b094158b/',
        website: 'https://topmate.io/manish_kumar_keshri'
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
      name: 'Dr. Lalit Garg',
      title: 'Prof. Computer Information Systems, Faculty of Information and Communication Technology ',
      affiliation: 'University of Malta',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEq6-9gR2QpmA/profile-displayphoto-shrink_400_400/B4DZT7_yyvHkAk-/0/1739394592386?e=1762992000&v=beta&t=UxCm6_mVigWIV9io4h9ap5tKoMBPon2HoNlNdd96s-Y',
      bio: 'Professor of Computer Information Systems at the University of Malta, with research and honorary roles at the University of Liverpool, NTU Singapore, and Ulster University.',
      specialization: 'Computing and Information Engineering',
      social: {
        linkedin: 'https://www.linkedin.com/in/drlalitgarg/',
        website: 'http://lalitgarg.info/',
        
      }
    },
    {
      id: '4',
      name: 'Dr. Anchit Bijalwan',
      title: 'Associate Professor SFHEA',
      affiliation: 'British University Vietnam',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQHnRtSCg2Eqbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1542453869762?e=1762992000&v=beta&t=qvpXvQ41saRV8HMQsJV5ZnX2c8M9_7Gr1nRehoVqpnI',
      bio: 'IEEE Senior Member | Lead, Computing, Games & Data Science Research | Stream Lead, FinTech & Data Analytics',
      specialization: 'FinTech &Data Analytics',
      social: {
        linkedin: 'https://www.linkedin.com/in/anchit-bijalwan-834521125/',
        website: '#',
        
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
                    href={speaker.social.website}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Globe size={16} />
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
            <Link 
              to="/registration"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Your Paper
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;