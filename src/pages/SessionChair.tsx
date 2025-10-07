import { motion } from 'framer-motion';
import { Crown, Users, Star, Award, Globe, MapPin } from 'lucide-react';

const SessionChair = () => {
  const committees = [
    {
      title: "Chief Patron",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      members: [
        { name: "Dr. Ramdas M. Pai", affiliation: "MAHE, Manipal, India" },
        { name: "Dr. Ranjan Pai", affiliation: "MAHE, Manipal, India" },
        { name: "S. Vaitheeswaran", affiliation: "Chairperson, Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Patron",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      members: [
        { name: "Dr. N N Sharma", affiliation: "President, Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Co-Patron(s)",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      members: [
        { name: "Dr. Karunakar A Kotegar", affiliation: "Pro President, Manipal University Jaipur, Jaipur, India" },
        { name: "Dr. Nitu Bhatnagar", affiliation: "Provost, Manipal University Jaipur, Jaipur, India" },
        { name: "Dr. Amit Soni", affiliation: "Registrar, Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Honorary Chair",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      members: [
        { name: "Dr. Kuldip Singh Sangwan", affiliation: "Dean, Faculty of Science, Technology and Architecture (FoSTA), Manipal University Jaipur, Jaipur, India" },
        { name: "Dr. Ts. Sellappan Palaniappan", affiliation: "Malaysia University of Science and Technology, Malaysia" },
        { name: "Dr. Anchit Bijalwan", affiliation: "British University Vietnam" }
      ]
    },
    {
      title: "General Chair",
      icon: <Crown className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      members: [
        { name: "Dr. CS Lamba", affiliation: "Associate Dean, School of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" },
        { name: "Dr. Roheet Bhatnagar", affiliation: "Associate Dean, School of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Co-General Chair",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      members: [
        { name: "Dr. Neha Chaudhary", affiliation: "Department of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Technical Program Chair",
      icon: <Globe className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      members: [
        { name: "Dr. Edmar Candeia Gurjao", affiliation: "Federal University of Campina Grande (UFCG), Campina Grande, Brazil" },
        { name: "Dr. Farid Nait-Abdesselam", affiliation: "Department of Computer Science, Paris Cité University, Paris, France" },
        { name: "Dr. Suman Ghosh", affiliation: "Huawei Finland Research Center, Helsinki, Finland" },
        { name: "Dr. Eleonora De Fillipi", affiliation: "University of Strasbourg, Strasbourg, France" },
        { name: "Dr. Mihnea Tufis", affiliation: "Eurecat, Barcelona, Spain" },
        { name: "Dr. Rohit Kumar", affiliation: "AstreZenica, Barcelona, Spain" },
        { name: "Dr. Naveen Kumar Meena", affiliation: "Beca Limited, Sydney, Australia" },
        { name: "Dr. Nishit Aman", affiliation: "Chulalongkorn University, Bangkok, Thailand" },
        { name: "Dr. Vishal Mathur", affiliation: "American International University, Kuwait" },
        { name: "Prof. Bahman Javadi", affiliation: "SDC Lab, Western Sydney University, Sydney, Australia" },
        { name: "Dr. S.K. Patra", affiliation: "NIT Agartala, Director, India" },
        { name: "Dr. Muzzammil Hussain", affiliation: "Central University of Rajasthan, Ajmer" },
        { name: "Dr. Sonal Jain", affiliation: "Sardar Vallabhbhai Patel University, India" },
        { name: "Dr. Roopashree Shailendra", affiliation: "B. M. S. College of Engineering, Bengaluru, India" },
        { name: "Dr. Puneet Mittal", affiliation: "Amity University Punjab, Mohali, India" }
      ]
    },
    {
      title: "Technical Program Co-chairs",
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      members: [
        { name: "Dr. Vivek Singh Sikarwar", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. V. Vivek", affiliation: "Alliance University, Bengaluru, India" },
        { name: "Dr. Puneet Mittal", affiliation: "Amity University Punjab, Mohali, India" },
        { name: "Dr. Ankur Panday", affiliation: "Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Technical Track Chair",
      icon: <Award className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      members: [
        { name: "Dr. Neetu Gupta", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Nitin Padariya", affiliation: "Rastriya Raksh University, Gandhi Nagar, India" },
        { name: "Dr. Kaushik Guha", affiliation: "NIT Silchar, India" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Session <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Chairs</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Meet the distinguished leaders and organizers of ICMAIN 2027, bringing together expertise from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Committee Header */}
                <div className={`bg-gradient-to-r ${committee.color} p-6`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-lg p-2">
                      {committee.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {committee.title}
                    </h2>
                  </div>
                </div>

                {/* Members Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {committee.members.map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: memberIndex * 0.05 }}
                        className="bg-slate-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-gray-600"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`bg-gradient-to-r ${committee.color} rounded-full p-2 flex-shrink-0 mt-1`}>
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight">
                              {member.name}
                            </h3>
                            <div className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {member.affiliation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Conference Leadership
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {committees.length}
                </div>
                <div className="text-lg text-white/90">
                  Committee Types
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {committees.reduce((total, committee) => total + committee.members.length, 0)}+
                </div>
                <div className="text-lg text-white/90">
                  Expert Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  15+
                </div>
                <div className="text-lg text-white/90">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-lg text-white/90">
                  Institutions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SessionChair;