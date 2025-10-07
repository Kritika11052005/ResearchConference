import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Conference Information */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Conference Logo"
                className="h-16 w-auto object-contain"
                loading="eager"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">ICMAIN 2027</h3>
                <p className="text-gray-300 text-sm">Conference on Emerging Technologies</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Join leading researchers, innovators, and industry experts for groundbreaking
              presentations and networking opportunities in the future of technology.
            </p>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">February 25-26, 2027</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Manipal University Jaipur</p>
                  <p>Dehmi-Kalan, Near GVK Toll Plaza</p>
                  <p>Jaipur-Ajmer Expressway, Rajasthan 303007</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+91-141-2999100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=researchconferencemuj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"> <span className="text-gray-300 text-sm">researchconferencemuj@gmail.com</span></a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Conference
                  </Link>
                </li>
                <li>
                  <Link to="/speakers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link to="/tracks" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Tracks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Important</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/submission" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Paper Submission
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link to="/publication" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Publication
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.02!2d75.56191!3d26.84457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0x39ac0baeb5770e0b!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1696123456789!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Manipal University Jaipur"
              ></iframe>
            </div>
            <div className="mt-3">
              <a
                href="https://maps.google.com/maps?q=Manipal+University+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Youtube size={18} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2027 ICMAIN Conference. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by Manipal University Jaipur
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;