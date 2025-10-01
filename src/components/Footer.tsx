import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

declare const google: any;
declare global {
  interface Window {
    initMap: () => void;
  }
}

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Conference', path: '/about' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Tracks', path: '/tracks' }
  ];

  const importantLinks = [
    { label: 'Paper Submission', path: '/submission' },
    { label: 'Registration', path: '#N/A' },
    { label: 'Publication', path: '/publication' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  useEffect(() => {
    // Ensure the Google Maps script is only added once
    if (document.getElementById('google-maps-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    document.body.appendChild(script);

    // Define the global initMap function
    window.initMap = () => {
      const manipalJaipur = { lat: 26.6713, lng: 75.6174 }; // Approximate coordinates for Manipal University Jaipur
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: manipalJaipur,
      });
      new google.maps.Marker({
        position: manipalJaipur,
        map: map,
        title: "Manipal University Jaipur",
      });
    };

    return () => {
      // Cleanup: remove the script and the global function when component unmounts
      const existingScript = document.getElementById('google-maps-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
        // Explicitly check for initMap before deleting and cast to any
        if ((window as any).initMap) {
          delete (window as any).initMap;
        }
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Conference Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  TechConf 2024
                </h3>
                <p className="text-gray-300">
                  International Conference on Emerging Technologies
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Tech University Campus<br />
                    Innovation Center<br />
                    Tech City, TC 12345
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:info@techconf2024.edu" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                    info@techconf2024.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Important
              </h4>
              <ul className="space-y-2">
                {importantLinks.map((link, index) => (
                  <li key={index}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Stay Connected
              </h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  Subscribe for updates
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-200">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Google Maps Section */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Our Location
              </h4>
              <div id="map" className="w-full h-64 rounded-lg shadow-lg"></div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-gray-400 text-sm text-center sm:text-left">
                <p>© 2024 TechConf - International Conference on Emerging Technologies.</p>
                <p>All rights reserved.</p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;