import React from 'react';
import { Calendar, FileText, CheckCircle, ExternalLink, Clock } from 'lucide-react';

const Submission = () => {
  const importantDates = [
    {
      label: 'Paper Submission Deadline',
      date: 'January 15, 2025',
      status: 'upcoming'
    },
    {
      label: 'Notification of Acceptance',
      date: 'February 15, 2025',
      status: 'upcoming'
    },
    {
      label: 'Camera-Ready Submission',
      date: 'February 28, 2025',
      status: 'upcoming'
    },
    {
      label: 'Early Registration Deadline',
      date: 'March 1, 2025',
      status: 'upcoming'
    }
  ];

  const submissionTypes = [
    {
      title: 'Full Papers',
      description: 'Original research contributions (8-10 pages)',
      icon: <FileText size={24} />
    },
    {
      title: 'Short Papers',
      description: 'Work in progress, case studies (4-6 pages)',
      icon: <FileText size={24} />
    },
    {
      title: 'Poster Presentations',
      description: 'Research summaries and demonstrations (2-4 pages)',
      icon: <FileText size={24} />
    }
  ];

  const guidelines = [
    'All submissions must be original and not published elsewhere',
    'Papers should be written in English and follow IEEE formatting guidelines',
    'Double-blind review process - remove author information from submissions',
    'Include abstract (150-200 words) and 4-6 keywords',
    'References should be properly formatted according to IEEE style',
    'Plagiarism check will be conducted on all submissions'
  ];

  return (
    <section id="submission" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Paper Submission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Submit your research and join the global conversation on emerging technologies.
            All accepted papers will be published in the conference proceedings.
          </p>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Important Dates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((date, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {date.label}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {date.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Submission Types
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {submissionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {type.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {type.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Submission Guidelines
            </h3>
            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {guideline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <Clock size={48} className="mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Submit?
                </h3>
                <p className="text-blue-100 mb-6">
                  Use our online submission system to upload your paper and track its review status.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <span>Submit Paper Now</span>
                  <ExternalLink size={18} />
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  <span>Download Template</span>
                  <FileText size={18} />
                </button>
                
                <div className="text-center pt-4 border-t border-blue-400">
                  <p className="text-blue-100 text-sm">
                    Need help? Contact us at{' '}
                    <a href="mailto:submissions@techconf2024.edu" className="text-white underline hover:no-underline">
                      submissions@techconf2024.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submission;