import { Star, Users, Trophy, Target, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const sponsors = [
  // { name: "Deakin University, Australia", logo: "/deakin.png" },
  { name: "University of Applied Sciences, Austria", logo: "/austria-new.png" },
  { name: "University of Malta, Malta, Europe", logo: "/malta.png" },
  { name: "University of Warwick, United Kingdom", logo: "/warwick.png" },
  // { name: "IEEE Delhi", logo: "/ieeedelhi.png" },
  // { name: "IEEE Bangalore", logo: "/ieeebg.png" },
  { name: "IEEE Computer Society", logo: "/ieeecs.png" },
  { name: "IEEE Student Branch", logo: "/ieee-sb.png" },
  { name: "IEEE Robotics and Automation Society", logo: "/ieee-ras.png" },
  { name: "IEEE Sensors Council", logo: "/ieee-sen.png" },
];

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20">

      {/* --- Organized By Section --- */}
      <section className="pt-32 pb-12 text-center relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 relative z-10"
        >
          Organized By
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center relative z-10"
        >
          <img 
            src="/muj.png" 
            alt="Manipal University Jaipur" 
            className="h-24 md:h-32 object-contain"
          />
        </motion.div>
      </section>

      {/* --- In Collaboration With Section --- */}
      <section className="py-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center relative z-10"
        >
          In Collaboration With(Proposed)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-center mb-16 relative z-10"
        >
          We are proud to be supported by leading universities and organizations worldwide
        </motion.p>

        {/* --- Sponsors Grid --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-gray-700/50"
              >
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name} 
                  className="h-20 object-contain"
                />
                <span className="text-center text-sm text-slate-700 dark:text-slate-300 px-2">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SDG Goals Section --- */}
      <section className="py-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center relative z-10"
        >
          SDG Goals
        </motion.h1>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative z-10"
          >
            <img 
              src="/sdg.png" 
              alt="Sustainable Development Goals" 
              className="w-full max-w-4xl object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact our sponsorship team to discuss custom packages and opportunities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">sponsorship@ariia2026.org</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">University Campus, India</p>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Download Sponsorship Brochure
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Sponsorship;

