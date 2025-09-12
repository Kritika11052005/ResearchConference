import React from 'react';
import type { CommitteeMember } from '../types';

const Committee = () => {
  const committees = {
    organizing: [
      {
        id: '1',
        name: 'Dr. Sarah Johnson',
        role: 'Conference Chair',
        affiliation: 'Tech University',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      },
      {
        id: '2',
        name: 'Prof. Michael Chen',
        role: 'Program Chair',
        affiliation: 'Innovation Institute',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      },
      {
        id: '3',
        name: 'Dr. Emily Rodriguez',
        role: 'Local Arrangements Chair',
        affiliation: 'Tech University',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      }
    ],
    advisory: [
      {
        id: '4',
        name: 'Prof. David Wilson',
        role: 'Advisory Board Member',
        affiliation: 'Global Tech Research',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      },
      {
        id: '5',
        name: 'Dr. Lisa Thompson',
        role: 'Advisory Board Member',
        affiliation: 'Future Systems Lab',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      },
      {
        id: '6',
        name: 'Prof. James Martinez',
        role: 'Advisory Board Member',
        affiliation: 'International Research Council',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
      }
    ]
  };

  const CommitteeSection = ({ title, members }: { title: string; members: CommitteeMember[] }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.affiliation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-20 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Organizing Committee
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated team of researchers and organizers making this conference possible.
          </p>
        </div>

        <CommitteeSection title="Organizing Committee" members={committees.organizing} />
        <CommitteeSection title="Advisory Board" members={committees.advisory} />

        {/* Sponsorship Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Partner with us to support cutting-edge research and connect with leading minds in technology.
            Various sponsorship packages available.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            View Sponsorship Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Committee;