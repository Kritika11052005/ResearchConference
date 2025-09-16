import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // University images array - add your image filenames here
  const universityImages = [
    '/Uni3.jpg',
    '/Uni.jpg',
    '/Uni2.jpg',
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % universityImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [universityImages.length]);


  return (
    <div className="min-h-screen">
      {/* Extended Background with Carousel - covers entire page up to Quick Info */}
      <div className="absolute inset-0 z-0">
        {universityImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`University Campus ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/60"></div>
      </div>


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-4 leading-tight">
              2026 IEEE 2nd International Conference on
              <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">
                Augmented Reality, Intelligent Systems, and Industrial Automation
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">
                (ARIIA 2026)
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto">
              Join researchers and innovators for groundbreaking presentations and networking
            </p>

            {/* Conference Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Calendar size={18} />
                <span className="text-base">March 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin size={18} />
                <span className="text-base">Tech University Campus</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users size={18} />
                <span className="text-base">Hybrid Mode</span>
              </div>
            </div>

            {/* Countdown Timer */}
            {/* <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Conference Starts In</h3>
              <CountdownTimer targetDate="2025-03-15T09:00:00" />
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="group flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Register Now</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to TechConf 2024
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The premier international conference bringing together researchers, academics, and industry professionals 
              to explore the latest developments in emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Global Participation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with researchers and professionals from around the world in both virtual and in-person formats.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Three Days of Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Packed schedule with keynote speeches, technical sessions, workshops, and networking opportunities.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Publication Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Selected papers will be published in prestigious journals and conference proceedings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;