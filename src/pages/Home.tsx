import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink, Award, Clock, Globe, Star, Download } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SponsorImage from '/Sponsor.jpg';

const Home = () => {
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // University images array - add your image filenames here
  const universityImages = [
    '/Uni3.jpg',
    '/Uni.jpg',
    '/Uni2.jpg'
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
      {/* Extended Background with Carousel - covers hero section completely */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {universityImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative z-10">

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              <span className="block mb-1">1st International Conference on</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-bold">
                Multidisciplinary Advances in Engineering, Artificial Intelligence
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-bold">
                and Network Security
              </span>
              <div className="space-y-2">
                <span className="block text-lg sm:text-xl md:text-2xl font-semibold">
                  (ICMAIN-2027)
                </span>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-slate-900 text-sm font-semibold rounded-full shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 009-9" />
                  </svg>
                  Hybrid Mode
                </div>
              </div>
            </h1>

            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-xl mx-auto leading-relaxed">
              Join leading researchers, innovators, and industry experts for groundbreaking presentations
              and networking opportunities in the future of technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/registration"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
                className="group flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                <span>Register Now</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Image Section
      <div className="w-full h-screen">
        <img
          src={SponsorImage}
          alt="Sponsor"
          className="w-full h-full object-contain"
        />
      </div> */}

      {/* Conference Highlights Section */}
      <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden -mt-8">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Conference
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Highlights</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Experience three days of innovation, learning, and networking at the forefront of technology
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">30+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Countries</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="card p-8 group hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Event Dates</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">February 25-26, 2027</p>
              <p className="text-slate-500 dark:text-slate-500">Two days of innovation</p>
            </div>

            <div className="card p-8 group hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Venue</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">Manipal University Jaipur</p>
              <p className="text-slate-500 dark:text-slate-500">Jaipur, Rajasthan, India</p>
            </div>

            <div className="card p-8 group hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Expected Participants</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">500+ Attendees</p>
              <p className="text-slate-500 dark:text-slate-500">Global research community</p>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Conference Countdown</h3>
            <CountdownTimer targetDate="2026-02-24T00:00:00" />
          </motion.div>
        </div>
      </section>

      {/* Conference Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Conference <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Important dates and milestones for ICMAIN 2027. Mark your calendar and don't miss these key deadlines.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex items-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Call for Papers</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">April 4, 2026</p>
                    <p className="text-slate-600 dark:text-slate-300">Submit your papers to participate in ICMAIN 2027</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative flex items-center group md:flex-row-reverse"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="mr-8 md:ml-0 ml-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Last Date of Paper Submission</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">November 1, 2026</p>
                    <p className="text-slate-600 dark:text-slate-300">Ensure your paper is submitted before the deadline</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative flex items-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Notification of Acceptance</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">November 20, 2026</p>
                    <p className="text-slate-600 dark:text-slate-300">Authors will be notified about paper acceptance</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative flex items-center group md:flex-row-reverse"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="mr-8 md:ml-0 ml-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration Start Date</h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2">December 25, 2026</p>
                    <p className="text-slate-600 dark:text-slate-300">Conference registration opens for all participants</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative flex items-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration End Date</h3>
                    <p className="text-red-600 dark:text-red-400 font-semibold mb-2">February 1, 2027</p>
                    <p className="text-slate-600 dark:text-slate-300">Final deadline for conference registration</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative flex items-center group md:flex-row-reverse"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="mr-8 md:ml-0 ml-8 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group-hover:-translate-y-1 border-2 border-indigo-300">
                    <h3 className="text-xl font-bold mb-2">Last Date of Camera-Ready Paper Submission</h3>
                    <p className="text-indigo-100 font-semibold mb-2">February 5, 2027</p>
                    <p className="text-indigo-100">Submit the final version of your paper via Microsoft CMT portal</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="section-padding bg-white dark:bg-slate-900 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why <span className="text-gradient">Attend ICMAIN 2027</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover the latest breakthroughs and connect with the brightest minds in technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 text-center group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Expert Speakers</h3>
              <p className="text-slate-600 dark:text-slate-400">Learn from world-renowned researchers and industry leaders</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 text-center group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Global Network</h3>
              <p className="text-slate-600 dark:text-slate-400">Connect with researchers from 30+ countries worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 text-center group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Research Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400">Present your work and compete for best paper awards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 text-center group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Future Tech</h3>
              <p className="text-slate-600 dark:text-slate-400">Explore cutting-edge technologies shaping tomorrow</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1920/800')] opacity-10"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us at ICMAIN 2027 and be part of the next generation of technological innovation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/registration"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>Register Now</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/to-be-updated"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
                className="group flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Download Brochure</span>
                <Download size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;