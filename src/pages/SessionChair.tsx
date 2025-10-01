import { Clock, Users, CheckCircle, Award, FileText, Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SessionChair = () => {
  const responsibilities = [
    {
      title: "Session Management",
      items: [
        "Introduce speakers and moderate Q&A sessions",
        "Ensure sessions start and end on time",
        "Facilitate smooth transitions between presentations",
        "Manage audience questions and discussions"
      ]
    },
    {
      title: "Technical Oversight",
      items: [
        "Review and evaluate paper presentations",
        "Provide constructive feedback to presenters",
        "Ensure technical quality of discussions",
        "Coordinate with AV team for technical requirements"
      ]
    },
    {
      title: "Administrative Duties",
      items: [
        "Submit session reports to organizing committee",
        "Collect presentation materials if required",
        "Coordinate with session co-chairs if applicable",
        "Attend pre-conference briefing sessions"
      ]
    }
  ];

  const benefits = [
    "Recognition in conference proceedings and website",
    "Complimentary conference registration",
    "Access to exclusive session chair networking events",
    "Certificate of appreciation from organizing committee",
    "Opportunity to network with leading researchers",
    "Enhanced visibility in the academic community"
  ];

  const requirements = [
    "PhD degree in relevant field or equivalent industry experience",
    "Demonstrated expertise in conference track areas",
    "Previous experience in academic or industry leadership roles",
    "Strong communication and presentation skills",
    "Availability for pre-conference briefing and sessions",
    "Commitment to maintaining session schedules"
  ];

  const tracks = [
    {
      name: "Augmented Reality Applications",
      sessions: 4,
      papers: 16,
      description: "Focus on AR applications in education, healthcare, manufacturing, and entertainment"
    },
    {
      name: "Intelligent Systems",
      sessions: 5,
      papers: 20,
      description: "Machine learning, AI algorithms, neural networks, and cognitive computing"
    },
    {
      name: "Industrial Automation",
      sessions: 3,
      papers: 12,
      description: "IoT, robotics, smart manufacturing, and Industry 4.0 technologies"
    },
    {
      name: "Human-Computer Interaction",
      sessions: 2,
      papers: 8,
      description: "User experience, interface design, and interaction technologies"
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
              Session
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Chairs</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Lead technical sessions and contribute to the success of ARIIA 2026 as a distinguished session chair
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                <span>3-Day Conference</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <span>14 Sessions</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                <span>56 Papers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracks Available */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Available Tracks
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Choose your area of expertise and lead sessions in cutting-edge research areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {track.name}
                  </h3>
                  <div className="flex gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {track.sessions}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {track.papers}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Papers</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {track.description}
                  </p>
                  <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                    Apply for This Track
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Responsibilities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Key duties and expectations for session chairs at ARIIA 2026
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {responsibilities.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Benefits
                </h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Requirements
                </h3>
              </div>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Lead a Session?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Applications are open for session chairs. Join us in shaping the future of technology research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Apply Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Download Guidelines
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Questions? Contact us at chairs@ariia2026.org
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SessionChair;