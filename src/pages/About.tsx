import { Target, Globe, Users, Award, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Research Excellence',
      description: 'Showcasing cutting-edge research in emerging technologies and their real-world applications.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Network',
      description: 'Connect with researchers, academics, and industry leaders from around the world.'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborative Environment',
      description: 'Foster collaboration and knowledge sharing across multiple disciplines.'
    },
    {
      icon: <Award size={24} />,
      title: 'Recognition Platform',
      description: 'Opportunity for recognition and publication in leading journals and proceedings.'
    }
  ];

  const objectives = [
    'Foster international collaboration in emerging technologies',
    'Provide a platform for sharing innovative research findings',
    'Bridge the gap between academia and industry',
    'Promote interdisciplinary research approaches',
    'Encourage young researchers and students',
    'Facilitate knowledge transfer and networking'
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="text-gradient">ICMAIN 2027</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            The International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation
            brings together leading minds to explore the latest advancements in technology, research methodologies, 
            and innovative applications that are shaping our future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:-translate-y-3 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conference Overview */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Conference Overview
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                ICMAIN 2027 is a premier international forum dedicated to advancing research and development 
                in Augmented Reality, Intelligent Systems, and Industrial Automation. Our conference serves 
                as a catalyst for innovation, bringing together researchers, practitioners, and industry 
                leaders from around the globe.
              </p>
              <p>
                With a focus on practical applications and theoretical foundations, ICMAIN 2027 provides 
                an invaluable platform for sharing cutting-edge research, discussing emerging trends, 
                and fostering collaborations that drive technological progress.
              </p>
              <p>
                Join us for three days of intensive learning, networking, and discovery as we explore 
                the technologies that are transforming industries and shaping the future of human-machine interaction.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                <Calendar className="inline-block w-5 h-5 mr-2 text-blue-600" />
                Event Details
              </h3>
              <div className="space-y-3 text-slate-600 dark:text-slate-400">
                <p><strong>Date:</strong> February 25-26, 2027</p>
                <p><strong>Venue:</strong> MUJ Campus, Jaipur, Rajasthan, India</p>
                <p><strong>Format:</strong> Hybrid (In-person & Virtual)</p>
                <p><strong>Expected Attendees:</strong> 500+</p>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                <MapPin className="inline-block w-5 h-5 mr-2 text-green-600" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Speakers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">30+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Papers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">20+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Objectives */}
        <div className="card p-8 lg:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Conference Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Be part of this exciting journey to explore the future of technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <div  className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/registration"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
              className="btn-primary"
            >
              Register Now
            </Link>
            <Link 
              to="/to-be-updated"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on navigation
              className="btn-secondary"
            >
              View Program
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;