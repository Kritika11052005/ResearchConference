import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { motion } from 'framer-motion';

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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="group flex items-center space-x-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Register Now</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section - Moved from Hero */}
      <section className="py-12 bg-white dark:bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Event Details</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
          >
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Calendar size={20} />
              <span className="text-lg">March 15-17, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <MapPin size={20} />
              <span className="text-lg">Tech University Campus</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Users size={20} />
              <span className="text-lg">Hybrid Mode</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CountdownTimer targetDate="2025-03-15T09:00:00" />
          </motion.div>
        </div>
      </section>

      {/* Photo Placeholder Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-2xl font-semibold"
          >
            [Your High-Quality Event Photo Here]
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to TechConf 2024
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The premier international conference bringing together researchers, academics, and industry professionals 
              to explore the latest developments in emerging technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Info Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Global Participation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with researchers and professionals from around the world in both virtual and in-person formats.
              </p>
            </motion.div>
            {/* Quick Info Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Three Days of Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Packed schedule with keynote speeches, technical sessions, workshops, and networking opportunities.
              </p>
            </motion.div>
            {/* Quick Info Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Publication Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Selected papers will be published in prestigious journals and conference proceedings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Overview
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <img 
                src="/overview-image.jpg" 
                alt="Event Overview" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 text-gray-700 dark:text-gray-300"
            >
              <p className="mb-6 text-lg leading-relaxed">
                The International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation (ARIIA 2026)
                is a premier event bringing together researchers, practitioners, and industry experts to explore cutting-edge
                advancements and innovations in these rapidly evolving fields.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                This conference aims to foster discussions on the latest trends, practical applications, and theoretical
                foundations of AR, intelligent systems, and industrial automation. Participants will have the opportunity
                to share their research, network with peers, and collaborate on future initiatives.
              </p>
              <p className="text-lg leading-relaxed">
                Key topics include virtual reality, machine learning, robotics, IoT, smart manufacturing, and human-computer interaction.
                Join us for an insightful experience with keynote speeches, technical sessions, workshops, and interactive demonstrations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline / Event Flow Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center"
          >
            Event Timeline
          </motion.h2>
          <div className="relative wrap overflow-hidden p-h-0">
            <div className="border-2-2 absolute border-opacity-20 border-blue-700 h-full border" style={{ left: '50%' }}></div>
            
            {/* Event 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-between flex-row-reverse items-center w-full left-right"
            >
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-blue-600 dark:text-blue-400">March 15, 2026 | 09:00 AM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-white">Opening Ceremony & Keynote Speech</h4>
                <p className="text-sm md:text-base leading-snug text-gray-700 dark:text-gray-300">
                  Join us for the grand opening and an inspiring keynote address by a leading expert in emerging technologies.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
            </motion.div>

            {/* Event 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 flex justify-between items-center w-full right-left"
            >
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-blue-600 dark:text-blue-400">March 15, 2026 | 10:30 AM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-white">Technical Sessions: AI & Machine Learning</h4>
                <p className="text-sm md:text-base leading-snug text-gray-700 dark:text-gray-300">
                  Parallel sessions featuring cutting-edge research presentations on artificial intelligence and machine learning.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
            </motion.div>

            {/* Event 3 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex justify-between flex-row-reverse items-center w-full left-right"
            >
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-blue-600 dark:text-blue-400">March 16, 2026 | 09:00 AM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-white">Workshops & Tutorials</h4>
                <p className="text-sm md:text-base leading-snug text-gray-700 dark:text-gray-300">
                  Hands-on workshops and in-depth tutorials on practical applications of emerging technologies.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
            </motion.div>

            {/* Event 4 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex justify-between items-center w-full right-left"
            >
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-blue-600 dark:text-blue-400">March 17, 2026 | 02:00 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-white">Closing Ceremony & Awards</h4>
                <p className="text-sm md:text-base leading-snug text-gray-700 dark:text-gray-300">
                  Concluding remarks, award presentations, and farewells.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-white dark:bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Conference Tracks
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Track Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Artificial Intelligence & Machine Learning</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Deep Learning Architectures</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Reinforcement Learning</li>
              </ul>
            </motion.div>
            {/* Track Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Augmented Reality & Virtual Reality</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Immersive User Interfaces</li>
                <li>AR/VR Hardware & Software</li>
                <li>Applications in Healthcare & Education</li>
                <li>Gaming & Entertainment</li>
              </ul>
            </motion.div>
            {/* Track Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Industrial Automation & Robotics</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Robotics & Control Systems</li>
                <li>Smart Manufacturing</li>
                <li>IoT for Industrial Applications</li>
                <li>Predictive Maintenance</li>
              </ul>
            </motion.div>
            {/* Track Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Science & Big Data Analytics</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Big Data Architectures</li>
                <li>Data Mining & Warehousing</li>
                <li>Business Intelligence</li>
                <li>Cloud Computing for Data</li>
              </ul>
            </motion.div>
            {/* Track Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cybersecurity & Blockchain</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Network Security</li>
                <li>Cryptocurrency & DLT</li>
                <li>Privacy Enhancing Technologies</li>
                <li>Ethical Hacking</li>
              </ul>
            </motion.div>
            {/* Track Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Human-Computer Interaction & User Experience</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>UI/UX Design Principles</li>
                <li>Usability Testing</li>
                <li>Interactive Systems</li>
                <li>Accessibility in Design</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Academic Topics Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Explore Academic Topics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Topic Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Artificial Intelligence</h3>
              <p className="text-gray-700 dark:text-gray-300">Delve into machine learning, neural networks, and expert systems.</p>
            </motion.div>
            {/* Topic Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-700 dark:text-gray-300">Explore network security, cryptography, and digital forensics.</p>
            </motion.div>
            {/* Topic Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Science</h3>
              <p className="text-gray-700 dark:text-gray-300">Focus on big data analytics, data mining, and statistical modeling.</p>
            </motion.div>
            {/* Topic Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Robotics & Automation</h3>
              <p className="text-gray-700 dark:text-gray-300">Study robotics, control systems, and industrial automation.</p>
            </motion.div>
            {/* Topic Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Augmented/Virtual Reality</h3>
              <p className="text-gray-700 dark:text-gray-300">Discover immersive technologies and their applications.</p>
            </motion.div>
            {/* Topic Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Internet of Things</h3>
              <p className="text-gray-700 dark:text-gray-300">Learn about smart devices, sensor networks, and connected systems.</p>
            </motion.div>
            {/* Topic Card 7 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cloud Computing</h3>
              <p className="text-gray-700 dark:text-gray-300">Explore distributed systems, virtualization, and cloud services.</p>
            </motion.div>
            {/* Topic Card 8 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Human-Computer Interaction</h3>
              <p className="text-gray-700 dark:text-gray-300">Focus on user experience, interface design, and usability.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white dark:bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Person 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src="/person1.jpg"
                alt="Contact Person 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Dr. Jane Doe</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Conference Chair</p>
              <p className="text-gray-700 dark:text-gray-300">jane.doe@example.com</p>
            </motion.div>
            {/* Contact Person 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src="/person2.jpg"
                alt="Contact Person 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Prof. John Smith</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Program Chair</p>
              <p className="text-gray-700 dark:text-gray-300">john.smith@example.com</p>
            </motion.div>
            {/* Contact Person 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src="/person3.jpg"
                alt="Contact Person 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Ms. Emily White</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Logistics Coordinator</p>
              <p className="text-gray-700 dark:text-gray-300">emily.white@example.com</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;