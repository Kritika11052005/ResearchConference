import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Utensils, Gift, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const registrationData = [
    {
      category: "IEEE Members",
      indian: {
        student_authors: "₹8,000",
        industryProfessional: "₹10,000"
      },
      foreign: {
        student_authors: "$250",
        industryProfessional: "$320"
      }
    },
    {
      category: "Non-IEEE Members", 
      indian: {
        academician: "₹9,000",
        industryProfessional: "₹12,000",
      },
      foreign: {
        academician: "$350",
        industryProfessional: "$100",
      }
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "IEEE Xplore Publication",
      description: "Registration Fee includes Publication in IEEE Xplore"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Presentation Certificate",
      description: "Includes Certificate of Presentation to Presenting Author"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Appreciation Certificate",
      description: "Includes Certificate of Appreciation to all Co-Authors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Full Conference Access",
      description: "Registration fee includes entry to all Sessions, Tea Breaks, and Lunch"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Conference Kit",
      description: "Registration fee includes Conference Kit"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "GALA Dinner",
      description: "Registration fee includes GALA Dinner"
    }
  ];

  const instructions = [
    "Only Full-time Research Scholars are eligible to register under the Research Scholar category.",
    "Authors will be asked to submit the Proof of UG/PG/Research Scholar to confirm the Category of Registration"
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
              Conference
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Registration</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Register now to secure your spot at ICMAIN 2027 and join the global community of researchers and innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Registration Fees
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Membership Status</th>
                      <th className="px-6 py-4 text-center font-semibold" colSpan={3}>Indian Authors</th>
                      <th className="px-6 py-4 text-center font-semibold" colSpan={3}>Foreign Authors</th>
                    </tr>
                    <tr className="bg-blue-500">
                      <th className="px-6 py-3"></th>
                      <th className="px-4 py-3 text-center text-sm">Student Authors</th>
                      <th className="px-4 py-3 text-center text-sm">Industry/Academic Authors</th>
                      {/* <th className="px-4 py-3 text-center text-sm">Research Scholar</th> */}
                      <th className="px-4 py-3 text-center text-sm">Student Authors</th>
                      <th className="px-4 py-3 text-center text-sm">Industry/Academic Authors</th>
                      {/* <th className="px-4 py-3 text-center text-sm">Research Scholar</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {registrationData.map((row, index) => (
                      <tr key={index} className={`border-b border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}`}>
                        <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{row.category}</td>
                        <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.indian.student_authors}</td>
                        <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.indian.industryProfessional}</td>
                        {/* <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.indian.researchScholar}</td> */}
                        <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.foreign.student_authors}</td>
                        <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.foreign.industryProfessional}</td>
                        {/* <td className="px-4 py-4 text-center text-slate-700 dark:text-slate-300 font-medium">{row.foreign.researchScholar}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Your registration includes access to all conference benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3" />
              Important Instructions
            </h3>
            <ul className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-amber-700 dark:text-amber-300">{instruction}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Complete your registration and be part of the premier research conference
            </p>
            <Link
              to="/to-be-updated"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Register Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Registration;