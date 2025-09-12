import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-950"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            International Conference on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
              Emerging Technologies
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading researchers, industry experts, and innovators for three days of groundbreaking presentations and networking
          </p>

          {/* Conference Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-white">
              <Calendar size={20} />
              <span className="text-lg">March 15-17, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin size={20} />
              <span className="text-lg">Tech University Campus</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Users size={20} />
              <span className="text-lg">Hybrid Mode</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Conference Starts In</h3>
            <CountdownTimer targetDate="2025-03-15T09:00:00" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Register Now</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <span>Submit Paper</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;