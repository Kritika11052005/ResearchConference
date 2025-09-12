import React from 'react';
import { BookOpen, Award, ExternalLink, Star } from 'lucide-react';

const Publication = () => {
  const publications = [
    {
      title: 'IEEE Conference Proceedings',
      description: 'All accepted full papers will be published in IEEE Xplore Digital Library',
      features: ['Peer-reviewed', 'Indexed in Scopus', 'DOI assigned', 'Global visibility'],
      impact: 'High Impact',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Special Journal Issue',
      description: 'Extended versions of selected papers invited for journal publication',
      features: ['Impact Factor: 3.2', 'Open Access option', 'Fast review process', 'International reach'],
      impact: 'Premium Publication',
      color: 'from-green-500 to-green-600'
    }
  ];

  const benefits = [
    {
      icon: <Award size={24} />,
      title: 'Recognition',
      description: 'Best paper awards and recognition for outstanding contributions'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Accessibility',
      description: 'Open access options available for maximum research visibility'
    },
    {
      icon: <Star size={24} />,
      title: 'Quality',
      description: 'Rigorous peer review process ensuring high-quality publications'
    }
  ];

  return (
    <section id="publication" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Publication Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get your research published in prestigious venues with global reach and impact.
            Multiple publication opportunities available for accepted papers.
          </p>
        </div>

        {/* Publication Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${pub.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {pub.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${pub.color}`}>
                    {pub.impact}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {pub.description}
                </p>

                <div className="space-y-3">
                  {pub.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Publication Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Recognition */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Award size={48} className="mx-auto mb-4 text-purple-200" />
            <h3 className="text-3xl font-bold mb-4">
              Best Paper Awards
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Outstanding papers will be recognized with Best Paper Awards in each track.
              Winners receive certificates, prizes, and special mention in the proceedings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">$1,000</div>
                <div className="text-purple-200 text-sm">Best Paper Award</div>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">$500</div>
                <div className="text-purple-200 text-sm">Best Student Paper</div>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">$500</div>
                <div className="text-purple-200 text-sm">Best Poster Award</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;