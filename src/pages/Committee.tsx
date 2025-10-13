import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  DollarSign, 
  BookOpen, 
  UserCheck, 
  Coffee, 
  Monitor, 
  Globe, 
  Mic, 
  Code,
  Building2,
  MapPin
} from 'lucide-react';

const Committee = () => {
  const committees = [
    {
      title: "Convener(s)",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
      bgPattern: "bg-emerald-50 dark:bg-emerald-900/20",
      members: [
        { name: "Dr Gireesh Kumar", affiliation: "Department of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" },
        { name: "Dr Mahesh Jangid", affiliation: "Department of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" },
        { name: "Dr Usha Jain", affiliation: "Department of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" }
      ]
    },
    {
      title: "Co-Convener(s)",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20",
      members: [
        { name: "Dr. Amit Dwivedi", affiliation: "University of Warwick, UK" },
        { name: "Dr. Lalit Garg", affiliation: "University of Malta, Malta" },
        { name: "Dr. Nithesh Naik", affiliation: "MIT, Manipal, India" },
        { name: "Dr. Surbhi Sharma", affiliation: "Department of Computer Science and Engineering, Manipal University Jaipur, Jaipur, India" },
      ]
    },
    {
      title: "Organizing Secretary(s)",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20",
      members: [
        { name: "Dr Aprna Tripathi", affiliation: "Manipal University Jaipur, Jaipur, India" },
      ]
    },
    {
      title: "Finance Committee",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      bgPattern: "bg-green-50 dark:bg-green-900/20",
      members: [
        { name: "Anita Shrotriya", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Shikha Mudra", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Publication Committee",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgPattern: "bg-orange-50 dark:bg-orange-900/20",
      members: [
        { name: "Dr Akshay Jadhav", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Mayank Namdev", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Jaydeep Kishore", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Registration Committee",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      bgPattern: "bg-pink-50 dark:bg-pink-900/20",
      members: [
        { name: "Dr. Sushama", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Nandini Babbar", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Babita Tiwari", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Santoshi Rudrakar", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Ridhi Arora", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Hospitality and Food Committee",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-600",
      bgPattern: "bg-amber-50 dark:bg-amber-900/20",
      members: [
        { name: "Mr. Lav Upadhyay", affiliation: "Manipal University Jaipur, India" },
        { name: "Mr. Venkatesh Gauri Shankar", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Bali Devi", affiliation: "Manipal University Jaipur, India" },
        { name: "Mr. Abhay Bhist", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Technical Sessions Committee",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      bgPattern: "bg-cyan-50 dark:bg-cyan-900/20",
      members: [
        { name: "Dr Usha Jain", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Surbhi Sharma", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Manu Srivastava", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Mayank Namdev", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr Neelam Chaplot", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "E-presence, Website and Informatics Support",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      bgPattern: "bg-teal-50 dark:bg-teal-900/20",
      members: [
        { name: "Dr. Aprna Tripathi", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Kirti Paliwal", affiliation: "Manipal University Jaipur, India" },
        { name: "Mr. Chandrapal Singh Dangi", affiliation: "Manipal University Jaipur, India" },
        { name: "Mr. Varun Narayan Jain", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Kritika Benjwal", affiliation: "Manipal University Jaipur, India" },
        { name: "Ms. Gauri Sharma", affiliation: "Manipal University Jaipur, India" }
      ]
    },
    {
      title: "Keynote Speakers (Tentative)",
      icon: <Mic className="w-6 h-6" />,
      color: "from-rose-500 to-pink-600",
      bgPattern: "bg-rose-50 dark:bg-rose-900/20",
      members: [
        { name: "Mr. Manish Kumar Keshri", affiliation: "Meta, USA" },
        { name: "Dr. Mark Leeson", affiliation: "University of Warwick, UK" },
        { name: "Dr. Lalit Garg", affiliation: "University of Malta, Europe" },
        { name: "Dr. Anchit Bijalwan", affiliation: "British University Vietnam" }
      ]
    },
    {
      title: "Technical Program Committee",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      bgPattern: "bg-indigo-50 dark:bg-indigo-900/20",
      members: [
        { name: "Gopichand Bandarupalli", affiliation: "United Health Group, USA" },
        { name: "Manish Kumar Keshri", affiliation: "Meta, USA" },
        { name: "Dr. Arfat Ahmad Khan", affiliation: "Khon Kaen University, Thailand" },
        { name: "Dr. Adil Rasool", affiliation: "Bakhtar University, Kabul, Afghanistan" },
        { name: "Prof. Keshav Dahal", affiliation: "University of the West of Scotland (UWS), Paisley, Scotland" },
        { name: "Dr. Ting Tin Tin", affiliation: "INTI International University, Nilai, Malaysia" },
        { name: "Dr. Pranay Bhardwaj", affiliation: "New York University, Abu Dhabi, UAE" },
        { name: "Dr. Vikas Jaiman", affiliation: "PassApp, Berlin, Germany" },
        { name: "Mr. Ankit Kumar Sharma", affiliation: "HCL Technologies, California, USA" },
        { name: "Dr. Dijana Capeska Bogatinoska", affiliation: "University for Information Science and Technology, Ohrid, Republic of North Macedonia" },
        { name: "Dr. Hamurabi Gamboa Rosales", affiliation: "Universidad Autónoma de Zacatecas, Zacatecas, Mexico" },
        { name: "Dr. Ladislav Polak", affiliation: "Brno University of Technology, Brno, Czech Republic" },
        { name: "Dr. Vinay Kumar", affiliation: "Indian Institute of Information Technology, Raipur" },
        { name: "Dr. Subrata Dutta", affiliation: "National Institute of Technology, Jamshedpur" },
        { name: "Dr. N. D. Jana", affiliation: "National Institute of Technology, Durgapur" },
        { name: "Dr. Santosh Kumar Vipparthi", affiliation: "Indian Institute of Technology, Ropar" },
        { name: "Prof. K. K. Pattanaik", affiliation: "Indian Institute of Information Technology and Management, Gwalior" },
        { name: "Dr. Shubhra Jain", affiliation: "Indian Institute of Information Technology, Lucknow" },
        { name: "Dr. Swalpa Kumar Roy", affiliation: "Alipurduar Govt. Engineering & Management College, Alipur, India" },
        { name: "Dr. Ruhul Amin", affiliation: "Indian Institute of Information Technology, Naya Raipur" },
        { name: "Dr. Arijit Nandi", affiliation: "Eurecat, Barcelona, Spain" },
        { name: "Dr. Sanjit Kumar Roy", affiliation: "Uppsala University, Sweden" },
        { name: "Dr. Ravishankar Mehta", affiliation: "Indian Institute of Information Technology, Bhagalpur" },
        { name: "Dr. Dhruba Joyti Kalita", affiliation: "Indian Institute of Technology Gandhinagar, Gandhinagar, India" },
        { name: "Dr. Aditya Gupta", affiliation: "Thapar Institute of Engineering & Technology, Patiala, Punjab, India" },
        { name: "Dr. Anshul Verma", affiliation: "Banaras Hindu University (BHU), Varanasi, India" },
        { name: "Dr. Atul Tripathi", affiliation: "Guru Gobind Singh Indraprastha University (GGSIU), Delhi, India" },
        { name: "Dr. Binod Kumar Singh", affiliation: "National Institute of Technology, Jamshedpur, India" },
        { name: "Dr. Debojyaty Banik", affiliation: "Sri Ramachandra University (SRU), Chennai, India" },
        { name: "Dr. Dhanraj Rajesh", affiliation: "Symbiosis International University, Pune, India" },
        { name: "Dr. Geeta Sikka", affiliation: "National Institute of Technology, Delhi, India" },
        { name: "Dr. Geetanjali Rathee", affiliation: "Netaji Subhas Institute of Technology, New Delhi, India" },
        { name: "Dr. Krishan Kumar Sethi", affiliation: "National Institute of Technology, Patna, India" },
        { name: "Dr. Krishan Pal Sharma", affiliation: "National Institute of Technology, Jalandhar, India" },
        { name: "Dr. Monu Bhagat", affiliation: "India Institute of Technology Kharagpur, Kharagpur, India" },
        { name: "Dr. Sunil Pathak", affiliation: "Amity University Rajasthan, India" },
        { name: "Dr. Rana Mukherji", affiliation: "The ICFAI University, Jaipur" },
        { name: "Dr. Nitesh Pradhan", affiliation: "The LNM Institute of Information Technology, Jaipur, India" },
        { name: "Dr Sumit Dhariwal", affiliation: "Madhav Institute of Technology & Science, Gwalior, India" },
        { name: "Dr. Santosh Verma", affiliation: "JK Lakshmipat University, India" },
        { name: "Dr. Neeraj Baghel", affiliation: "Bennett University, India" },
        { name: "Dr. Aparna Sighal", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Shweta Upadhyaya", affiliation: "Bennett University, India" },
        { name: "Dr. Ritu Gupta", affiliation: "TA Pai Management Institute, Manipal, India" },
        { name: "Dr. Malikhan Singh", affiliation: "BSACET, India" },
        { name: "Dr. Priyaranjan Sharma", affiliation: "Manipal University Jaipur" },
        { name: "Dr. Ajay Kumar", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Manmohan Sharma", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Udit Mamodiya", affiliation: "Poornima University, India" },
        { name: "Dr. Ashish Raj", affiliation: "Poornima University, Jaipur, India" },
        { name: "Dr. Rukhsana Parveen", affiliation: "LNMIT, Jaipur" },
        { name: "Dr. Yogesh Pal", affiliation: "Bennett University, India" },
        { name: "Dr. Sunil Dangi", affiliation: "Galgotias University, India" },
        { name: "Dr. Mohit Aggrawal", affiliation: "IILM University, Greater Noida, India" },
        { name: "Dr. Swayam Prakash", affiliation: "University of Delhi, India" },
        { name: "Dr. Vivek Kumar", affiliation: "UPES, India" },
        { name: "Dr. Sunil Patel", affiliation: "Galgotias University, India" },
        { name: "Dr. Neha Janu", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Reema Ajmera", affiliation: "GIT, India" },
        { name: "Dr. Aditya Sinha", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Sandeep Kumar Sharma", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Promod Soni", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Govind Upadhya", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Manmohan Sharma", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Lakshmi Narayana Sadineni", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Shekhar Chandar", affiliation: "JECRC University, Jaipur, India" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Conference <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Committee</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              The dedicated team of experts and organizers working together to make ICMAIN 2027 a remarkable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative ${committee.bgPattern} rounded-3xl p-8 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-xl`}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

                {/* Committee Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`bg-gradient-to-r ${committee.color} rounded-2xl p-4 shadow-lg`}>
                      <div className="bg-white/20 rounded-xl p-3">
                        {committee.icon}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
                    {committee.title}
                  </h2>
                  <div className={`w-24 h-1 bg-gradient-to-r ${committee.color} mx-auto rounded-full`}></div>
                </div>

                {/* Members Grid */}
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-stretch">
                    {committee.members.map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                        className="w-full max-w-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-gray-700/50 group flex flex-col justify-between mx-auto"
                      >
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${committee.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {member.affiliation}
                          </p>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Committee Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {committees.length}
                </div>
                <div className="text-xl text-white/90">
                  Committees
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {committees.reduce((total, committee) => total + committee.members.length, 0)}+
                </div>
                <div className="text-xl text-white/90">
                  Members
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <div className="text-xl text-white/90">
                  Countries
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-xl text-white/90">
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

export default Committee;