import React from 'react';
import type { Speaker } from '../types';

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      id: '1',
      name: 'Dr. Alexandra Kim',
      affiliation: 'MIT - Artificial Intelligence Lab',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'keynote',
      bio: 'Leading researcher in machine learning and AI applications in healthcare.'
    },
    {
      id: '2',
      name: 'Prof. Robert Singh',
      affiliation: 'Stanford University - Quantum Computing',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'keynote',
      bio: 'Pioneer in quantum algorithms and quantum machine learning applications.'
    },
    {
      id: '3',
      name: 'Dr. Maria Gonzalez',
      affiliation: 'Google DeepMind - Ethics in AI',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'invited',
      bio: 'Expert in AI ethics, responsible AI development, and algorithmic fairness.'
    },
    {
      id: '4',
      name: 'Prof. James Liu',
      affiliation: 'Carnegie Mellon - Robotics Institute',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'invited',
      bio: 'Renowned for work in autonomous systems and human-robot interaction.'
    },
    {
      id: '5',
      name: 'Dr. Sarah Ahmed',
      affiliation: 'Microsoft Research - Cloud Computing',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'invited',
      bio: 'Leading expert in distributed systems and edge computing architectures.'
    },
    {
      id: '6',
      name: 'Prof. David Chang',
      affiliation: 'UC Berkeley - Cybersecurity',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      type: 'invited',
      bio: 'Cybersecurity researcher focusing on blockchain and cryptographic protocols.'
    }
  ];

  const keynoteSpeakers = speakers.filter(speaker => speaker.type === 'keynote');
  const invitedSpeakers = speakers.filter(speaker => speaker.type === 'invited');

  const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {speaker.name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
          {speaker.affiliation}
        </p>
        {speaker.bio && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {speaker.bio}
          </p>
        )}
      </div>
    </div>
  );

  const SpeakerSection = ({ title, speakers }: { title: string; speakers: Speaker[] }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Distinguished Speakers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from leading experts and visionaries who are shaping the future of technology
            and research across multiple disciplines.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-16">
          <SpeakerSection title="Keynote Speakers" speakers={keynoteSpeakers} />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
          <SpeakerSection title="Invited Speakers" speakers={invitedSpeakers} />
        </div>
      </div>
    </div>
  );
};

export default Speakers;