import React from 'react';
import { Cpu, Database, Shield, Zap, Globe, Brain, Smartphone, Cloud } from 'lucide-react';
import type { Track } from '../types';

const Tracks = () => {
  const tracks: Track[] = [
    {
      id: '1',
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Deep learning, neural networks, computer vision, natural language processing, and AI applications across industries.',
      icon: 'Brain'
    },
    {
      id: '2',
      title: 'Quantum Computing',
      description: 'Quantum algorithms, quantum machine learning, quantum cryptography, and practical quantum computing applications.',
      icon: 'Cpu'
    },
    {
      id: '3',
      title: 'Cybersecurity & Privacy',
      description: 'Network security, cryptography, blockchain technology, privacy-preserving technologies, and security in IoT.',
      icon: 'Shield'
    },
    {
      id: '4',
      title: 'Cloud Computing & Edge Systems',
      description: 'Distributed computing, edge computing, serverless architectures, and cloud-native technologies.',
      icon: 'Cloud'
    },
    {
      id: '5',
      title: 'Internet of Things (IoT)',
      description: 'Smart devices, sensor networks, industrial IoT, smart cities, and connected systems architecture.',
      icon: 'Globe'
    },
    {
      id: '6',
      title: 'Mobile & Ubiquitous Computing',
      description: 'Mobile applications, wearable technology, location-based services, and context-aware computing.',
      icon: 'Smartphone'
    },
    {
      id: '7',
      title: 'Big Data & Analytics',
      description: 'Data mining, predictive analytics, real-time processing, and data visualization techniques.',
      icon: 'Database'
    },
    {
      id: '8',
      title: 'Renewable Energy & Smart Grids',
      description: 'Smart energy systems, renewable energy integration, power management, and sustainable technologies.',
      icon: 'Zap'
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
    <section id="tracks" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Conference Tracks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge research across multiple domains of emerging technologies.
            Each track features specialized sessions, workshops, and networking opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(track.icon)}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {track.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Share Your Research?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Submit your paper to one of our tracks and join the global conversation on emerging technologies.
              Early bird submission deadline is approaching soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Submit Your Paper
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                View Submission Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;