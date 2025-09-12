import React from 'react';
import { MapPin, Plane, Hotel, Camera, Car, Train } from 'lucide-react';

const Logistics = () => {
  const travelOptions = [
    {
      icon: <Plane size={24} />,
      title: 'By Air',
      description: 'International Airport is 45 minutes from campus',
      details: 'Direct flights from major cities. Airport shuttle service available.'
    },
    {
      icon: <Train size={24} />,
      title: 'By Train',
      description: 'Central Station is 20 minutes from venue',
      details: 'High-speed rail connections. Campus shuttle runs every 30 minutes.'
    },
    {
      icon: <Car size={24} />,
      title: 'By Car',
      description: 'Ample parking available on campus',
      details: 'GPS coordinates provided. Visitor parking passes available.'
    }
  ];

  const accommodations = [
    {
      name: 'University Guest House',
      type: 'On-Campus',
      price: '$89/night',
      features: ['Free WiFi', 'Breakfast included', '5-min walk to venue'],
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Grand Hotel Downtown',
      type: 'Premium',
      price: '$149/night',
      features: ['Business center', 'Gym & Spa', '15-min drive to venue'],
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Tech Inn & Suites',
      type: 'Budget-Friendly',
      price: '$69/night',
      features: ['Free parking', 'Continental breakfast', '10-min drive'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const attractions = [
    {
      name: 'Tech Museum',
      description: 'Interactive technology exhibits and innovation history',
      image: 'https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '2 km'
    },
    {
      name: 'Innovation District',
      description: 'Hub of startups, research centers, and tech companies',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.5 km'
    },
    {
      name: 'University Botanical Garden',
      description: 'Beautiful gardens perfect for networking walks',
      image: 'https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '500 m'
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Logistics & Travel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know for a smooth conference experience.
            We've arranged convenient options for travel, accommodation, and local exploration.
          </p>
        </div>

        {/* How to Reach */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How to Reach
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {travelOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {option.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {option.details}
                </p>
              </div>
            ))}
          </div>
          
          {/* Map placeholder */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                Interactive map will be available here
              </p>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Accommodation Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((hotel, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {hotel.name}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      {hotel.price}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                    {hotel.type}
                  </p>
                  <div className="space-y-1">
                    {hotel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visa Information */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Visa Information
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Visa Requirements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Most countries require a visitor visa
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Conference invitation letter available upon registration
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Apply for visa at least 4-6 weeks before travel
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Support Available
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Dedicated visa support team
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Sample invitation letters and documentation
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Fast-track processing for conference attendees
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200">
                  Contact Visa Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Places to Visit */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Places to Visit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {attraction.name}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;