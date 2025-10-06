import { motion } from 'framer-motion';
import { 
  Cog, 
  Brain, 
  Shield, 
  Wifi, 
  Eye, 
  Cpu,
  Cloud,
  Smartphone,
  Database,
  Zap,
  Globe,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Tracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Advances in Engineering and Technology",
      icon: Cog,
      color: "from-blue-500 to-blue-600",
      topics: [
        "Smart Materials",
        "Sustainable Engineering",
        "Renewable Energy Systems",
        "Green Technologies",
        "Industrial Automation and Control Systems",
        "Engineering Applications",
        "Engineering Design",
        "Modeling, and Optimization"
      ]
    },
    {
      id: 2,
      title: "Artificial Intelligence and Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      topics: [
        "Machine Learning and Deep Learning",
        "Natural Language Processing (NLP)",
        "Quantum Computing",
        "Computer Vision",
        "AI in Agriculture, Healthcare and Smart Cities",
        "Reinforcement Learning",
        "Generative AI",
        "Robotic Process Automation, Intelligent Bots",
        "Cloud-based Automation",
        "Big Data, Data Mining and Machine Learning",
        "Privacy and Security in Automation",
        "Deep Learning"
      ]
    },
    {
      id: 3,
      title: "Security and Privacy",
      icon: Shield,
      color: "from-red-500 to-red-600",
      topics: [
        "Network Security",
        "Cryptography",
        "Secure Protocols",
        "Cyber Threat Intelligence",
        "Digital Forensics",
        "Cloud Security",
        "IoT Security Frameworks",
        "Zero-Trust Architectures",
        "Wireless Networks Security",
        "Privacy-Preserving AI",
        "Data Integrity and Access Control",
        "Quantum Cryptography"
      ]
    },
    {
      id: 4,
      title: "IoT, Industry 5.0, and Smart Systems",
      icon: Wifi,
      color: "from-green-500 to-green-600",
      topics: [
        "Internet of Things (IoT)",
        "Industrial IoT (IIoT)",
        "Healthcare IoT (HIoT)",
        "Cyber-Physical Systems",
        "Digital Manufacturing",
        "Smart Cities",
        "Intelligent Infrastructure",
        "Sensor Networks",
        "Embedded Intelligence",
        "Human-Centric Industry 5.0 Models",
        "Predictive Maintenance",
        "Automation Systems"
      ]
    },
    {
      id: 5,
      title: "Immersive and Intelligent Interfaces (AR/VR, HCI)",
      icon: Eye,
      color: "from-orange-500 to-orange-600",
      topics: [
        "Augmented Reality",
        "Artificial Intelligence",
        "Digital Transformation",
        "Human Machine Collaboration",
        "Digital Manufacturing",
        "Digital Twin",
        "E-mobility and Additive Manufacturing",
        "Collaborative Robots",
        "Predictive Maintenance",
        "Sustainable and Green Manufacturing",
        "Data Analytics in Manufacturing",
        "Cyber-Physical Systems (CPS)",
        "Automation in Agriculture and Horticulture"
      ]
    },
    {
      id: 6,
      title: "Simulation, Modeling, and Data Analytics",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-600",
      topics: [
        "Computational Modeling",
        "System Simulation",
        "Digital Twins",
        "Virtual Prototyping",
        "Big Data Analytics",
        "Predictive Modeling",
        "Simulation in Manufacturing, Healthcare, and Smart Cities",
        "High-Performance",
        "Parallel Computing"
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Brain: <Brain size={28} />,
      Cpu: <Cpu size={28} />,
      Shield: <Shield size={28} />,
      Cloud: <Cloud size={28} />,
      Globe: <Globe size={28} />,
      Smartphone: <Smartphone size={28} />,
      Database: <Database size={28} />,
      Zap: <Zap size={28} />
    };
    return icons[iconName as keyof typeof icons] || <Cpu size={28} />;
  };

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
              Conference <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tracks</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Multidisciplinary Advances in Engineering, Artificial Intelligence, and Network Security
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
              6 Research Tracks • 50+ Topics • Global Collaboration
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${track.color} p-6`}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          Track {track.id}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {track.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="grid grid-cols-1 gap-3 flex-1">
                      {track.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: topicIndex * 0.05 }}
                          className="flex items-center group/item hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg p-2 transition-colors duration-200"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-200">
                            {topic}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Share Your Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Submit your paper to one of our six specialized tracks and contribute to the advancement of 
              engineering, AI, and network security research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/registration"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Your Paper
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Download Guidelines
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tracks;