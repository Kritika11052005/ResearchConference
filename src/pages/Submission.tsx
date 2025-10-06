import { FileText, AlertTriangle, CheckCircle, Award, Upload, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Submission = () => {
  const criticalInfo = [
    "Only Original Research Articles are accepted",
    "Review Articles are Not Accepted",
    "All submissions will be subjected to at least three blind reviews",
    "Acceptance will be based entirely on quality, relevance, and originality",
    "A minimum of one author must register and present their research paper"
  ];

  const submissionInstructions = [
    "The full paper should span not more than 10 Pages (including references)",
    "Authors are required to adhere to the IEEE template provided",
    "The similarity index (Plagiarism) should not exceed 15%",
    "Upload similarity report from 'Turnitin / Authenticate' Software",
    "Configure similarity check settings to (<1%)",
    "Upload full article and similarity report in PDF format only",
    "PDFs should collectively not exceed 10 MB",
    "Do not combine the full paper and similarity report into one PDF"
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
              Paper <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Submission</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Academicians, researchers and industry professionals are invited to submit original research articles, 
              previously unpublished, not currently under review by another conference or journal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText size={32} className="text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">INSTRUCTIONS FOR SUBMISSIONS</h2>
            </div>
            <div className="space-y-4">
              {submissionInstructions.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-700  dark:text-slate-300">{instruction}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Critical Information Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-lg mb-8"
          >
            <div className="flex items-center mb-6">
              <AlertTriangle size={32} className="mr-4" />
              <h2 className="text-2xl font-bold">CRITICAL INFORMATION</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {criticalInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-red-200 flex-shrink-0 mt-1" />
                  <p className="text-red-100">{info}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submission Portal Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Submission Link */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center">
                <Upload size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Submit Your Paper</h3>
                <p className="text-blue-100 mb-6">
                  Submit your full length paper using Microsoft CMT portal
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Submit via CMT</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>

            {/* IEEE Template */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="text-center">
                <FileText size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">IEEE Template</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Download the official IEEE template for paper formatting
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <span>Download Template</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Paper Awards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Best Paper Awards</h2>
              <p className="text-yellow-100 text-lg">
                
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Submission;