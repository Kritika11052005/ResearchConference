import { Star, Users, Trophy, Target, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const sponsors = [
  { name: "Deakin University, Australia", logo: "/deakin.png" },
  { name: "University of Applied Sciences, Austria", logo: "/austria.png" },
  { name: "University of Malta, Malta, Europe", logo: "/malta.png" },
  { name: "University of Warwick, United Kingdom", logo: "/warwick.png" },
  { name: "IEEE Delhi", logo: "/ieeedelhi.png" },
  { name: "IEEE Bangalore", logo: "/ieeebg.png" },
  { name: "IEEE Computer Society", logo: "/ieeecs.png" },
  { name: "IEEE Student Branch", logo: "/ieee-sb.png" },
  { name: "IEEE Robotics and Automation Society", logo: "/ieee-ras.png" },
  { name: "IEEE Sensors Council", logo: "/ieee-sen.png" },
];

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">

      {/* --- Organized By Section --- */}
      <section className="pt-32 pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8"
        >
          Organized By
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src="/muj.png" 
            alt="Manipal University Jaipur" 
            className="h-24 md:h-32 object-contain"
          />
        </motion.div>
      </section>

      {/* --- In Collaboration With Section --- */}
      <section className="py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center"
        >
          In Collaboration With
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-center mb-16"
        >
          We are proud to be supported by leading universities and organizations worldwide
        </motion.p>

        {/* --- Sponsors Grid --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-4 w-full"
              >
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name} 
                  className="h-20 object-contain"
                />
                <span className="text-center text-sm text-slate-700 dark:text-slate-300 px-2">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SDG Goals Section --- */}
      <section className="py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center"
        >
          SDG Goals
        </motion.h1>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src="/sdg.png" 
              alt="Sustainable Development Goals" 
              className="w-full max-w-4xl object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Sponsorship;

/*const Sponsorship = () => {
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      price: "$25,000",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Premier logo placement on all conference materials",
        "Keynote speaking opportunity",
        "Exhibition booth (premium location)",
        "10 complimentary registrations",
        "Co-branding opportunities",
        "Access to attendee contact list",
        "Social media mentions (weekly)",
        "VIP networking dinner invitation"
      ],
      popular: true
    },
    {
      tier: "Gold",
      price: "$15,000",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Logo on conference website and materials",
        "Exhibition booth",
        "6 complimentary registrations",
        "Technical session sponsorship",
        "Coffee break sponsorship",
        "Social media mentions",
        "Access to conference proceedings"
      ],
      popular: false
    },
    {
      tier: "Silver",
      price: "$8,000",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Logo on conference website",
        "Exhibition space",
        "4 complimentary registrations",
        "Workshop sponsorship opportunity",
        "Conference bag insert",
        "Basic networking access"
      ],
      popular: false
    },
    {
      tier: "Bronze",
      price: "$3,000",
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Logo on conference website",
        "2 complimentary registrations",
        "Conference proceedings acknowledgment",
        "Basic exhibition space"
      ],
      popular: false
    }
  ];
*/
/*
  const sponsorshipOpportunities = [
    {
      title: "Keynote Sponsorship",
      price: "$10,000",
      description: "Sponsor a keynote session and introduce the speaker to 500+ attendees."
    },
    {
      title: "Coffee Break Sponsorship",
      price: "$5,000",
      description: "Brand visibility during networking breaks with signage and announcements."
    },
    {
      title: "Lunch Sponsorship",
      price: "$8,000",
      description: "Exclusive branding during lunch with opportunity for brief presentation."
    },
    {
      title: "Welcome Reception",
      price: "$12,000",
      description: "Host the opening networking reception with full branding rights."
    },
    {
      title: "Conference Bag Sponsorship",
      price: "$4,000",
      description: "Your logo on conference bags distributed to all attendees."
    },
    {
      title: "Wi-Fi Sponsorship",
      price: "$3,000",
      description: "Brand the conference Wi-Fi network name for maximum visibility."
    }
  ];
*/
/*
 { /*return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */
      /*
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
              Partnership
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Opportunities</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Join leading organizations in supporting cutting-edge research and innovation at ICMAIN 2027
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <span>500+ Attendees</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-500" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-blue-500" />
                <span>Industry Leaders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
*/
      {/* Sponsorship Tiers */}
      /*
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Sponsorship Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Choose the sponsorship level that best aligns with your organization's goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2">
                    {tier.tier}
                  </h3>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {tier.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/
      {/* Additional Opportunities */}
      /*
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Additional Sponsorship Opportunities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Customize your sponsorship with these targeted opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {opportunity.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {opportunity.price}
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {opportunity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/
      {/* Contact Section */}
      /*
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact our sponsorship team to discuss custom packages and opportunities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">sponsorship@ariia2026.org</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-blue-100">University Campus, India</p>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Download Sponsorship Brochure
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  


export default Sponsorship;*/

